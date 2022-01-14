package com.kkostrov.drminfo

import android.annotation.SuppressLint
import android.annotation.TargetApi
import android.content.pm.PackageManager
import android.drm.DrmManagerClient
import android.graphics.Point
import android.media.AudioDeviceInfo
import android.media.AudioFormat.*
import android.media.AudioManager
import android.media.MediaDrm
import android.os.Build
import android.os.Bundle
import android.text.TextUtils
import android.util.Log
import android.view.Display
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.hardware.display.DisplayManagerCompat
import androidx.core.view.DisplayCompat
import com.google.android.exoplayer2.audio.AudioCapabilities
import com.google.android.exoplayer2.mediacodec.MediaCodecUtil
import com.google.android.exoplayer2.mediacodec.MediaCodecUtil.DecoderQueryException
import com.google.android.exoplayer2.util.MimeTypes
import com.google.android.exoplayer2.util.Util
import com.google.android.material.internal.ContextUtils.getActivity
import com.huawei.hms.analytics.HiAnalyticsTools
import java.lang.Integer.max
import java.net.NetworkInterface
import java.util.*


class MainActivity : AppCompatActivity() {
    private var blocksContainer: LinearLayout? = null
    private var secondBlocksContainer: LinearLayout? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        HiAnalyticsTools.enableLog()
        blocksContainer = findViewById(R.id.blocks_container)
        secondBlocksContainer = findViewById(R.id.blocks_container1)
        systemInfo(addBlock("System Information", false))
        //advancedAudioInfo(addBlock("Supported Audio", true))
        getDrmInfo(addBlock("Widevine", false), WIDEVINE_UUID, true)
        getDrmInfo(addBlock("ClearKey", false), CLEARKEY_UUID, false)
        getDrmInfo(addBlock("WisePlay", false), WISEPLAY_UUID, false)
        getDrmInfo(addBlock("PlayReady", false), PLAYREADY_UUID, false)
        otherDrmInfo(addBlock("Other DRMs", true) as ViewGroup)
    }

    private fun addPair(view: ViewGroup, key: String, value: String?) {
        val keyValueView: View = View.inflate(this, R.layout.information_item_layout, null)
        val keyTV = keyValueView.findViewById<TextView>(R.id.pair_key)
        keyTV.text = key
        val valueTV = keyValueView.findViewById<TextView>(R.id.pair_value)
        valueTV.text = value
        view.addView(keyValueView)
    }

    private fun addBlock(title: String, useSecondBlock: Boolean): LinearLayout {
        val block: LinearLayout = View.inflate(this, R.layout.block_layout, null) as LinearLayout
        val titleTV = block.findViewById<TextView>(R.id.block_title)
        titleTV.text = title
        if (useSecondBlock && secondBlocksContainer != null) {
            secondBlocksContainer!!.addView(block)
        } else {
            blocksContainer!!.addView(block)
        }
        return block.findViewById(R.id.block_content)
    }

    private fun advancedAudioInfo(view: ViewGroup) {
        val capabilities = AudioCapabilities.getCapabilities(this)

        val supported : MutableList<String> = mutableListOf()
        val notSupported : MutableList<String> = mutableListOf()
        capabilities.let {
            for (i in 2..19) {
                if (it.supportsEncoding(i)) {
                    supported.add(toLogFriendlyEncoding(i))
                } else {
                    notSupported.add(toLogFriendlyEncoding(i))
                }
            }
            addPair(view, "Supported", supported.joinToString(separator = ", "))
            addPair(view, "Not Supported", notSupported.joinToString(separator = ", "))
//            addPair(view, "Max Number of Channels", it.maxChannelCount.toString())
        }
        addPair(view, "Supports 5.1 (1)", yesNo(hasDolbySupport1))
        addPair(view, "Supports 5.1 (2)", yesNo(hasDolbySupport2))
        addPair(view, "Max Channels", trueChannelsCount.toString())
        //addPair(view, "Supports 4K (UHD)", yesNo(isUhdDevice()))
        //addPair(view, "Supports 4K (UHD) (2)", yesNo(isUHD()))

        try {
            AudioMimeTypes.forEach { mime ->
                val list = MediaCodecUtil.getDecoderInfos(mime, false, false)
                val decoders : MutableList<String> = mutableListOf()
                list.forEach {
                    val channelsAdjusted = adjustMaxInputChannelCount(it.name, mime,
                            capabilities.maxChannelCount)
                    //decoders.add("${it.name} ($channelsAdjusted channels)")
                    decoders.add(it.name)
                }
                if (decoders.isNotEmpty()) addPair(view, mime, decoders.joinToString(separator = ", "))
            }

        } catch (ignored: DecoderQueryException) {
        }
    }

    private val hasDolbySupport1 by lazy {
        AudioCapabilities.getCapabilities(this).let {
            val supportsEAC3 = it.supportsEncoding(ENCODING_E_AC3)
            supportsEAC3 && it.maxChannelCount > EAC3_CHANNELS_COUNT // EAC3_CHANNELS_COUNT = 6
        }
    }

    private val hasDolbySupport2 by lazy {
        trueChannelsCount > EAC3_CHANNELS_COUNT // EAC3_CHANNELS_COUNT = 6
    }

    private val trueChannelsCount by lazy {
        getMaxChannels()
    }

    private fun getMaxChannels() : Int {
        var maxChannels = 2
        val audioManager:AudioManager = getSystemService(AUDIO_SERVICE) as AudioManager
        val audioDeviceInfos = audioManager.getDevices(AudioManager.GET_DEVICES_OUTPUTS)
        audioDeviceInfos.forEach { info ->
            val channelCounts = info.channelCounts
            val maxChannelsInInfo = channelCounts.maxByOrNull { it } ?: 0
            maxChannels = max(maxChannels, maxChannelsInInfo)
        }
        return maxChannels

    }




    private fun isUhdDevice() : Boolean {

        val displayManager = DisplayManagerCompat.getInstance(this)
        val defaultDisplay = displayManager.getDisplay(Display.DEFAULT_DISPLAY)

        defaultDisplay?.let {
            val modes = DisplayCompat.getSupportedModes(this@MainActivity, it)
            return modes.any { mode -> mode.physicalHeight >= 2160 && mode.physicalWidth >= 3840 }
        }
        return false
    }

    @SuppressLint("RestrictedApi")
    fun isUHD(): Boolean {
        val display: Display = getActivity(this)?.windowManager?.defaultDisplay ?: return false
        val displaySize: Point = getDisplaySize(display) ?: return false
        return displaySize.x >= 3840 && displaySize.y >= 2160
    }

    private fun getDisplaySize(display: Display): Point? {
        val displaySize = Point()
        when {
            Util.SDK_INT >= 23 -> {
                getDisplaySizeV23(display, displaySize)
            }
            Util.SDK_INT >= 17 -> {
                getDisplaySizeV17(display, displaySize)
            }
            Util.SDK_INT >= 16 -> {
                getDisplaySizeV16(display, displaySize)
            }
            else -> {
                getDisplaySizeV9(display, displaySize)
            }
        }
        return displaySize
    }

    @TargetApi(23)
    private fun getDisplaySizeV23(display: Display, outSize: Point) {
        val modes = display.supportedModes
        if (modes.isNotEmpty()) {
            val mode = modes[0]
            outSize.x = mode.physicalWidth
            outSize.y = mode.physicalHeight
        }
    }

    @TargetApi(17)
    private fun getDisplaySizeV17(display: Display, outSize: Point) {
        display.getRealSize(outSize)
    }

    @TargetApi(16)
    private fun getDisplaySizeV16(display: Display, outSize: Point) {
        display.getSize(outSize)
    }

    private fun getDisplaySizeV9(display: Display, outSize: Point) {
        outSize.x = display.width
        outSize.y = display.height
    }

    private fun hasDolby() : Boolean {
        var hasDolby = false
        try {
            MediaCodecUtil.getDecoderInfos(MimeTypes.AUDIO_E_AC3, false, false).forEach {
                hasDolby = it.isAudioChannelCountSupportedV21(EAC3_CHANNELS_COUNT)
            }
        } catch (ignored: DecoderQueryException) {}
        AudioCapabilities.getCapabilities(this).let {
            hasDolby = it.supportsEncoding(ENCODING_E_AC3) && it.maxChannelCount > EAC3_CHANNELS_COUNT
        }
        return hasDolby
    }

    private fun systemInfo(view: ViewGroup) {
        addPair(view, "Brand:", Build.BRAND)
        addPair(view, "Model:", Build.MODEL)
        addPair(view, "Manufacturer:", Build.MANUFACTURER)
        addPair(view, "Device:", Build.DEVICE)
        addPair(view, "Platform:", chipSet())
        addPair(view, "Android version:", Build.VERSION.RELEASE)
        addPair(view, "SDK Level:", Build.VERSION.SDK_INT.toString())
        addPair(view, "Fingerprint:", Build.FINGERPRINT)
        addPair(view, "MAC address:", macAddr)
        addPair(view, "Architecture:", System.getProperty("os.arch"))
        addPair(view, "DRM Info version", appVersion)
    }

    private fun otherDrmInfo(view: ViewGroup) {
        for ((key, value) in DRMs) {
            addPair(view, value, if (MediaDrm.isCryptoSchemeSupported(key)) "Supported" else "Not Supported")
        }
    }

    private fun getDrmInfo(view: ViewGroup, uuid: UUID, isWidevine: Boolean) {
        var mediaDrm: MediaDrm? = null
        try {
            mediaDrm = MediaDrm(uuid)
            addPair(view, "Vendor:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VENDOR))
            addPair(view, "Version:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VERSION))
            addPair(view, "Description:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_DESCRIPTION))
            addPair(view, "Algorithms:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_ALGORITHMS))
            if (isWidevine) {
                addPair(view, "Security Level:", mediaDrm.getPropertyString("securityLevel"))
                addPair(view, "System Id:", mediaDrm.getPropertyString("systemId"))
                addPair(view, "HDCP Level:", mediaDrm.getPropertyString("hdcpLevel"))
                addPair(view, "Max HDCP Level:", mediaDrm.getPropertyString("maxHdcpLevel"))
                addPair(view, "Usage Reporting Support:", mediaDrm.getPropertyString("usageReportingSupport"))
                addPair(view, "Max Sessions:", mediaDrm.getPropertyString("maxNumberOfSessions"))
                addPair(view, "Max Open Sessions:", mediaDrm.getPropertyString("numberOfOpenSessions"))
            }
            mediaDrm.release()
        } catch (e: Exception) {
            addPair(view, "DRM", "Not Supported")
            Log.e(LOG_TAG, e.message + Arrays.toString(e.stackTrace))
            e.printStackTrace()
        }
        val drmManagerClient = DrmManagerClient(this)
        val availableDrmEngines = drmManagerClient.availableDrmEngines
        if (availableDrmEngines.isNotEmpty()) addPair(view, "Engines: ", TextUtils.join(", ", availableDrmEngines))
    }

    private fun chipSet(): String {
        return try {
            @SuppressLint("PrivateApi") val aClass = Class.forName("android.os.SystemProperties")
            val method = aClass.getMethod("get", String::class.java)
            val platform = method.invoke(null, "ro.board.platform")
            if (platform is String) platform else "<$platform>"
        } catch (e: Exception) {
            Log.e(LOG_TAG, e.message + Arrays.toString(e.stackTrace))
            "<$e>"
        }
    }

    private fun yesNo(b: Boolean): String {
        return if (b) "Yes" else "No"
    }

    private fun toLogFriendlyEncoding(enc: Int): String {
        return when (enc) {
            ENCODING_INVALID -> "Invalid encoding"
            ENCODING_PCM_16BIT -> "PCM 16bit"
            ENCODING_PCM_8BIT -> "PCM 8bit"
            ENCODING_PCM_FLOAT -> "PCM FLOAT"
            ENCODING_AC3 -> "AC3"
            ENCODING_E_AC3 -> "E-AC3"
            ENCODING_DTS -> "DTS"
            ENCODING_DTS_HD -> "DTS HD"
            ENCODING_MP3 -> "MP3"
            ENCODING_AAC_LC -> "AAC LC"
            ENCODING_AAC_HE_V1 -> "AAC HE v1"
            ENCODING_AAC_HE_V2 -> "AAC HE v2"
            ENCODING_IEC61937 -> "IEC61937"
            ENCODING_DOLBY_TRUEHD -> "Dolby TrueHD"
            ENCODING_AAC_ELD -> "AAC ELD"
            ENCODING_AAC_XHE -> "AAC XHE"
            ENCODING_AC4 -> "AC4"
            ENCODING_E_AC3_JOC -> "E-AC3 JOC"
            ENCODING_DOLBY_MAT -> "Dolby MAT"
            else -> "invalid encoding $enc"
        }
    }

    private fun adjustMaxInputChannelCount(name: String, mimeType: String, maxChannelCount: Int): Int {
        if (maxChannelCount > 1 || Util.SDK_INT >= 26 && maxChannelCount > 0) {
            // The maximum channel count looks like it's been set correctly.
            return maxChannelCount
        }
        if (MimeTypes.AUDIO_MPEG == mimeType || MimeTypes.AUDIO_AMR_NB == mimeType || MimeTypes.AUDIO_AMR_WB == mimeType || MimeTypes.AUDIO_AAC == mimeType || MimeTypes.AUDIO_VORBIS == mimeType || MimeTypes.AUDIO_OPUS == mimeType || MimeTypes.AUDIO_RAW == mimeType || MimeTypes.AUDIO_FLAC == mimeType || MimeTypes.AUDIO_ALAW == mimeType || MimeTypes.AUDIO_MLAW == mimeType || MimeTypes.AUDIO_MSGSM == mimeType) {
            // Platform code should have set a default.
            return maxChannelCount
        }
        // The maximum channel count looks incorrect. Adjust it to an assumed default.
        val assumedMaxChannelCount: Int = when {
            MimeTypes.AUDIO_AC3 == mimeType -> {
                6
            }
            MimeTypes.AUDIO_E_AC3 == mimeType -> {
                16
            }
            else -> {
                // Default to the platform limit, which is 30.
                30
            }
        }
        Log.w("DRM INFO", "AssumedMaxChannelAdjustment: " + name + ", [" + maxChannelCount + " to "
                + assumedMaxChannelCount + "]")
        return assumedMaxChannelCount
    }

    private val appVersion: String
        get() {
            var version = ""
            try {
                val pInfo = this.packageManager.getPackageInfo(this.packageName, 0)
                version = pInfo.versionName
            } catch (e: PackageManager.NameNotFoundException) {
                e.printStackTrace()
            }
            return version
        }

        private val macAddr: String
            get() {
                try {
                    val all: List<NetworkInterface> = Collections.list(NetworkInterface.getNetworkInterfaces())
                    for (nif in all) {
                        if (!nif.name.equals("wlan0", ignoreCase = true)) continue
                        val macBytes = nif.hardwareAddress ?: return ""
                        val res1 = StringBuilder()
                        for (b in macBytes) {
                            //res1.append(Integer.toHexString(b & 0xFF) + ":");
                            res1.append(String.format("%02X:", b))
                        }
                        if (res1.isNotEmpty()) {
                            res1.deleteCharAt(res1.length - 1)
                        }
                        return res1.toString()
                    }
                } catch (ex: Exception) {
                    //handle exception
                    ex.printStackTrace()
                    Log.e(LOG_TAG, ex.message.toString())
                }
                return ""
            }

    companion object {
        private const val LOG_TAG = "DRMInfo"
        const val EAC3_CHANNELS_COUNT = 6
        val COMMON_PSSH_UUID = UUID(0x1077EFECC0B24D02L, -0x531cc3e1ad1d04b5L)
        val CLEARKEY_UUID = UUID(-0x1d8e62a7567a4c37L, 0x781AB030AF78D30EL)
        val PLAYREADY_UUID = UUID(-0x65fb0f8667bfbd7aL, -0x546d19a41f77a06bL)
        val WISEPLAY_UUID = UUID(0X3D5E6D359B9A41E8L, -0x47bc22c3918d3bd4L)
        val WIDEVINE_UUID = UUID(-0x121074568629b532L, -0x5c37d8232ae2de13L)
        private val AudioMimeTypes: Array<String> = arrayOf(
                MimeTypes.AUDIO_E_AC3,
                MimeTypes.AUDIO_MP4,
                MimeTypes.AUDIO_AAC,
                MimeTypes.AUDIO_MATROSKA,
                MimeTypes.AUDIO_WEBM,
                MimeTypes.AUDIO_MPEG,
                MimeTypes.AUDIO_MPEG_L1,
                MimeTypes.AUDIO_MPEG_L2,
                MimeTypes.AUDIO_RAW,
                MimeTypes.AUDIO_ALAW,
                MimeTypes.AUDIO_MLAW,
                MimeTypes.AUDIO_AC3,
                MimeTypes.AUDIO_E_AC3,
                MimeTypes.AUDIO_E_AC3_JOC,
                MimeTypes.AUDIO_AC4,
                MimeTypes.AUDIO_TRUEHD,
                MimeTypes.AUDIO_DTS,
                MimeTypes.AUDIO_DTS_HD,
                MimeTypes.AUDIO_DTS_EXPRESS,
                MimeTypes.AUDIO_VORBIS,
                MimeTypes.AUDIO_OPUS,
                MimeTypes.AUDIO_AMR,
                MimeTypes.AUDIO_AMR_NB,
                MimeTypes.AUDIO_AMR_WB,
                MimeTypes.AUDIO_FLAC,
                MimeTypes.AUDIO_ALAC,
                MimeTypes.AUDIO_MSGSM,
                MimeTypes.AUDIO_OGG,
                MimeTypes.AUDIO_WAV,
                MimeTypes.AUDIO_UNKNOWN,
        )
        private val DRMs: Map<UUID, String> = object : HashMap<UUID, String>() {
            init {
                put(WIDEVINE_UUID, "Widevine Content Protection")
                put(CLEARKEY_UUID, "Clearkey")
                put(PLAYREADY_UUID, "Microsoft PlayReady")
                put(WISEPLAY_UUID, "WisePlay")
                put(COMMON_PSSH_UUID, "Common PSSH box format")

                // Other scheme UUIDs taken from: https://dashif.org/identifiers/content_protection/
                // We will do simple check if they are supported or not
                put(UUID.fromString("3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c"), "ChinaDRM")
                put(UUID.fromString("5E629AF5-38DA-4063-8977-97FFBD9902D4"), "Marlin Adaptive Streaming Simple Profile V1.0")
                put(UUID.fromString("adb41c24-2dbf-4a6d-958b-4457c0d27b95"), "Nagra MediaAccess PRM 3.0")
                put(UUID.fromString("A68129D3-575B-4F1A-9CBA-3223846CF7C3"), "Cisco/NDS VideoGuard Everywhere DRM")
                put(UUID.fromString("9a27dd82-fde2-4725-8cbc-4234aa06ec09"), "Verimatrix VCAS")
                put(UUID.fromString("F239E769-EFA3-4850-9C16-A903C6932EFB"), "Adobe Primetime DRM, version 4")
                put(UUID.fromString("1f83e1e8-6ee9-4f0d-ba2f-5ec4e3ed1a66"), "SecureMedia")
                put(UUID.fromString("644FE7B5-260F-4FAD-949A-0762FFB054B4"), "CMLA (OMA DRM)")
                put(UUID.fromString("6a99532d-869f-5922-9a91-113ab7b1e2f3"), "MobiTV DRM")
                put(UUID.fromString("35BF197B-530E-42D7-8B65-1B4BF415070F"), "DivX DRM Series 5")
                put(UUID.fromString("B4413586-C58C-FFB0-94A5-D4896C1AF6C3"), "Viaccess-Orca DRM (VODRM)")
                put(UUID.fromString("80a6be7e-1448-4c37-9e70-d5aebe04c8d2"), "Irdeto Content Protection")
                put(UUID.fromString("dcf4e3e3-62f1-5818-7ba6-0a6fe33ff3dd"), "DigiCAP SmartXess")
                put(UUID.fromString("45d481cb-8fe0-49c0-ada9-ab2d2455b2f2"), "CoreCrypt")
                put(UUID.fromString("616C7469-6361-7374-2D50-726F74656374"), "Alticast")
                put(UUID.fromString("992c46e6-c437-4899-b6a0-50fa91ad0e39"), "SecureMedia SteelKnot")
                put(UUID.fromString("e2719d58-a985-b3c9-781a-b030af78d30e"), "DASH-IF Interoperability Points v3.4")
                put(UUID.fromString("94CE86FB-07FF-4F43-ADB8-93D2FA968CA2"), "Apple FairPlay")
                put(UUID.fromString("279fe473-512c-48fe-ade8-d176fee6b40f"), "Arris Titanium")
                put(UUID.fromString("aa11967f-cc01-4a4a-8e99-c5d3dddfea2d"), "Unitend DRM (UDRM)")
                put(UUID.fromString("6dd8b3c3-45f4-4a68-bf3a-64168d01a4a6"), "ABV DRM (MoDRM)")
                put(UUID.fromString("793b7956-9f94-4946-a942-23e7ef7e44b4"), "VisionCrypt")
            }
        }
    }
}