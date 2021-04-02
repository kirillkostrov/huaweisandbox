package com.kkostrov.drminfo;

import android.annotation.SuppressLint;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.drm.DrmInfo;
import android.drm.DrmInfoRequest;
import android.drm.DrmManagerClient;
import android.media.MediaDrm;
import android.media.UnsupportedSchemeException;
import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import com.huawei.hms.analytics.HiAnalyticsTools;

import java.io.Console;
import java.lang.reflect.Method;
import java.net.NetworkInterface;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    private static final String LOG_TAG = "DRMInfo";

    public static final UUID COMMON_PSSH_UUID = new UUID(0x1077EFECC0B24D02L, 0xACE33C1E52E2FB4BL);
    public static final UUID CLEARKEY_UUID = new UUID(0xE2719D58A985B3C9L, 0x781AB030AF78D30EL);
    public static final UUID PLAYREADY_UUID = new UUID(0x9A04F07998404286L, 0xAB92E65BE0885F95L);
    public static final UUID WISEPLAY_UUID = new UUID(0X3D5E6D359B9A41E8L, 0XB843DD3C6E72C42CL);
    public static final UUID WIDEVINE_UUID = new UUID(0xEDEF8BA979D64ACEL, 0xA3C827DCD51D21EDL);

    private static final Map<UUID, String> DRMs = new HashMap<UUID, String>() {{
        put(WIDEVINE_UUID, "Widevine Content Protection");
        put(CLEARKEY_UUID, "Clearkey");
        put(PLAYREADY_UUID, "Microsoft PlayReady");
        put(WISEPLAY_UUID, "WisePlay");
        put(COMMON_PSSH_UUID, "Common PSSH box format");

        // Other scheme UUIDs taken from: https://dashif.org/identifiers/content_protection/
        // We will do simple check if they are supported or not

        put(UUID.fromString("3d5e6d35-9b9a-41e8-b843-dd3c6e72c42c"), "ChinaDRM");
        put(UUID.fromString("5E629AF5-38DA-4063-8977-97FFBD9902D4"), "Marlin Adaptive Streaming Simple Profile V1.0");
        put(UUID.fromString("adb41c24-2dbf-4a6d-958b-4457c0d27b95"), "Nagra MediaAccess PRM 3.0");
        put(UUID.fromString("A68129D3-575B-4F1A-9CBA-3223846CF7C3"), "Cisco/NDS VideoGuard Everywhere DRM");
        put(UUID.fromString("9a27dd82-fde2-4725-8cbc-4234aa06ec09"), "Verimatrix VCAS");
        put(UUID.fromString("F239E769-EFA3-4850-9C16-A903C6932EFB"), "Adobe Primetime DRM, version 4");
        put(UUID.fromString("1f83e1e8-6ee9-4f0d-ba2f-5ec4e3ed1a66"), "SecureMedia");
        put(UUID.fromString("644FE7B5-260F-4FAD-949A-0762FFB054B4"), "CMLA (OMA DRM)");
        put(UUID.fromString("6a99532d-869f-5922-9a91-113ab7b1e2f3"), "MobiTV DRM");
        put(UUID.fromString("35BF197B-530E-42D7-8B65-1B4BF415070F"), "DivX DRM Series 5");
        put(UUID.fromString("B4413586-C58C-FFB0-94A5-D4896C1AF6C3"), "Viaccess-Orca DRM (VODRM)");
        put(UUID.fromString("80a6be7e-1448-4c37-9e70-d5aebe04c8d2"), "Irdeto Content Protection");
        put(UUID.fromString("dcf4e3e3-62f1-5818-7ba6-0a6fe33ff3dd"), "DigiCAP SmartXess");
        put(UUID.fromString("45d481cb-8fe0-49c0-ada9-ab2d2455b2f2"), "CoreCrypt");
        put(UUID.fromString("616C7469-6361-7374-2D50-726F74656374"), "Alticast");
        put(UUID.fromString("992c46e6-c437-4899-b6a0-50fa91ad0e39"), "SecureMedia SteelKnot");
        put(UUID.fromString("e2719d58-a985-b3c9-781a-b030af78d30e"), "DASH-IF Interoperability Points v3.4");
        put(UUID.fromString("94CE86FB-07FF-4F43-ADB8-93D2FA968CA2"), "Apple FairPlay");
        put(UUID.fromString("279fe473-512c-48fe-ade8-d176fee6b40f"), "Arris Titanium");
        put(UUID.fromString("aa11967f-cc01-4a4a-8e99-c5d3dddfea2d"), "Unitend DRM (UDRM)");
        put(UUID.fromString("6dd8b3c3-45f4-4a68-bf3a-64168d01a4a6"), "ABV DRM (MoDRM)");
        put(UUID.fromString("793b7956-9f94-4946-a942-23e7ef7e44b4"), "VisionCrypt");
    }};

    LinearLayout blocksContainer;
    LinearLayout secondBlocksContainer;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        HiAnalyticsTools.enableLog();

        blocksContainer = findViewById(R.id.blocks_container);
        secondBlocksContainer = findViewById(R.id.blocks_container1);

        systemInfo(addBlock("System Information", false));
        getDrmInfo(addBlock("Widevine", false), WIDEVINE_UUID, true);
        getDrmInfo(addBlock("ClearKey", false), CLEARKEY_UUID, false);
        getDrmInfo(addBlock("WisePlay", false), WISEPLAY_UUID, false);
        getDrmInfo(addBlock("PlayReady", false), PLAYREADY_UUID, false);

        otherDrmInfo((ViewGroup) addBlock("Other DRMs", true));
    }

    private void addPair(ViewGroup view, String key, String value) {
        View keyValueView;
        keyValueView = View.inflate(this, R.layout.information_item_layout, null);
        TextView keyTV = keyValueView.findViewById(R.id.pair_key);
        keyTV.setText(key);
        TextView valueTV = keyValueView.findViewById(R.id.pair_value);
        valueTV.setText(value);
        view.addView(keyValueView);
    }

    private LinearLayout addBlock(String title, Boolean useSecondBlock) {
        LinearLayout block;
        block = (LinearLayout) View.inflate(this, R.layout.block_layout, null);
        TextView titleTV = block.findViewById(R.id.block_title);
        titleTV.setText(title);
        if (useSecondBlock && secondBlocksContainer != null) {
            secondBlocksContainer.addView(block);
        } else {
            blocksContainer.addView(block);
        }
        return block.findViewById(R.id.block_content);
    }

    private void systemInfo(ViewGroup view)  {
        addPair(view,"Brand:", Build.BRAND);
        addPair(view,"Model:", Build.MODEL);
        addPair(view,"Manufacturer:", Build.MANUFACTURER);
        addPair(view,"Device:", Build.DEVICE);
        addPair(view,"Platform:", chipSet());
        addPair(view,"Android version:", Build.VERSION.RELEASE);
        addPair(view,"SDK Level:", Integer.toString(Build.VERSION.SDK_INT));
        addPair(view,"Fingerprint:", Build.FINGERPRINT);
        addPair(view,"MAC address:", getMacAddr());
        addPair(view, "Architecture:", System.getProperty("os.arch"));
        addPair(view, "DRM Info version", getAppVersion());
    }

    private void otherDrmInfo(ViewGroup view) {
        for (Map.Entry<UUID, String> set : DRMs.entrySet()) {
            addPair(view, set.getValue(), MediaDrm.isCryptoSchemeSupported(set.getKey()) ? "Supported" : "Not Supported");
        }
    }

    private void getDrmInfo(ViewGroup view, UUID uuid, boolean isWidevine) {
        MediaDrm mediaDrm = null;
        try {
            mediaDrm = new MediaDrm(uuid);

            addPair(view, "Vendor:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VENDOR));
            addPair(view, "Version:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VERSION));
            addPair(view, "Description:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_DESCRIPTION));
            addPair(view, "Algorithms:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_ALGORITHMS));
            if (isWidevine) {
                addPair(view, "Security Level:", mediaDrm.getPropertyString("securityLevel"));
                addPair(view, "System Id:", mediaDrm.getPropertyString("systemId"));
                addPair(view, "HDCP Level:", mediaDrm.getPropertyString("hdcpLevel"));
                addPair(view, "Max HDCP Level:", mediaDrm.getPropertyString("maxHdcpLevel"));
                addPair(view, "Usage Reporting Support:", mediaDrm.getPropertyString("usageReportingSupport"));
                addPair(view, "Max Sessions:", mediaDrm.getPropertyString("maxNumberOfSessions"));
                addPair(view, "Max Open Sessions:", mediaDrm.getPropertyString("numberOfOpenSessions"));
            }
            mediaDrm.release();
        } catch (Exception e) {
            addPair(view, "DRM", "Not Supported");
            Log.e(LOG_TAG, e.getMessage() + Arrays.toString(e.getStackTrace()));
            e.printStackTrace();
        }

        DrmManagerClient drmManagerClient = new DrmManagerClient(this);
        String[] availableDrmEngines = drmManagerClient.getAvailableDrmEngines();

        if (availableDrmEngines.length > 0 ) addPair(view, "Engines: ", TextUtils.join(", ", availableDrmEngines));
    }

    private String chipSet() {
        try {
            @SuppressLint("PrivateApi")
            Class<?> aClass = Class.forName("android.os.SystemProperties");
            Method method = aClass.getMethod("get", String.class);
            Object platform = method.invoke(null, "ro.board.platform");

            return platform instanceof String ? (String) platform : "<" + platform + ">";
        } catch (Exception e) {
            Log.e(LOG_TAG, e.getMessage() + Arrays.toString(e.getStackTrace()));
            return "<" + e + ">";
        }
    }

    private String getAppVersion() {
        String version = "";
        try {
            PackageInfo pInfo = this.getPackageManager().getPackageInfo(this.getPackageName(), 0);
            version = pInfo.versionName;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return version;
    }

    public static String getMacAddr() {
        try {
            List<NetworkInterface> all = Collections.list(NetworkInterface.getNetworkInterfaces());
            for (NetworkInterface nif : all) {
                if (!nif.getName().equalsIgnoreCase("wlan0")) continue;

                byte[] macBytes = nif.getHardwareAddress();
                if (macBytes == null) {
                    return "";
                }

                StringBuilder res1 = new StringBuilder();
                for (byte b : macBytes) {
                    //res1.append(Integer.toHexString(b & 0xFF) + ":");
                    res1.append(String.format("%02X:",b));
                }

                if (res1.length() > 0) {
                    res1.deleteCharAt(res1.length() - 1);
                }
                return res1.toString();
            }
        } catch (Exception ex) {
            //handle exception
            ex.printStackTrace();
            Log.e(LOG_TAG, ex.getMessage());
        }
        return "";
    }

}
