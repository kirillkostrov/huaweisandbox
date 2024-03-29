package com.huawei.hms.ads6

import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.huawei.hms.ads.AdListener
import com.huawei.hms.ads.AdParam
import com.huawei.hms.ads.R
import com.huawei.hms.ads.VideoOperator.VideoLifecycleListener
import com.huawei.hms.ads.nativead.*
import kotlinx.android.synthetic.main.activity_native.*

class NativeActivity : AppCompatActivity(R.layout.activity_native) {

    private var nativeAd: NativeAd? = null
    private lateinit var loadAd: View.OnClickListener

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        loadAd = View.OnClickListener {
            // NativeAdConfiguration.Builder используется для настроек рекламы
            // подробности: https://developer.huawei.com/consumer/en/doc/development/HMS-References/ads-api-nativeadconfiguration-builder
            val adConfiguration = NativeAdConfiguration.Builder().build()

            // Создаем Builder в конструктуре которого передаем контекст и id рекламы
            // Далеее устанавливаем слушателей и настройки созданыне ранее -> загружаем рекламу
            NativeAdLoader.Builder(this, getAdId())
                .setNativeAdLoadedListener(nativeAdLoadedListener)
                .setAdListener(adListener)
                .setNativeAdOptions(adConfiguration)
                .build()
                .loadAd(AdParam.Builder().build())
        }
        loadAdBtn.setOnClickListener(loadAd)
        loadAdBtn.performClick()
    }

    private val adListener = object : AdListener() {
        override fun onAdFailed(errorCode: Int) {
            Toast.makeText(applicationContext, errorCode, Toast.LENGTH_LONG).show()
        }
    }

    private val nativeAdLoadedListener = NativeAd.NativeAdLoadedListener {
        showNativeAd(it)
    }

    private fun showNativeAd(nativeAd: NativeAd) {

        if (this.nativeAd != null) {
            this.nativeAd?.destroy()
        }
        this.nativeAd = nativeAd

        val nativeView = layoutInflater.inflate(getLayoutType(), null) as NativeView

        // инициализируем данные загруженной рекламой
        initNativeAdView(this.nativeAd, nativeView)

        // добавляем рекламу на UI
        nativeAdScrollView.removeAllViews()
        nativeAdScrollView.addView(nativeView)
    }

    private fun initNativeAdView(nativeAd: NativeAd?, nativeView: NativeView) {
        // инициализируем view в классе NativeView
        nativeView.apply {
            titleView = findViewById(R.id.ad_title)
            mediaView = findViewById<View>(R.id.ad_media) as MediaView
            adSourceView = findViewById(R.id.ad_source)
            callToActionView = findViewById(R.id.ad_call_to_action)

            // заполняем данными
            (titleView as TextView).text = nativeAd?.title
            mediaView.setMediaContent(nativeAd?.mediaContent)
        }

        when {
            nativeAd?.adSource != null -> {
                (nativeView.adSourceView as TextView).text = nativeAd.adSource
                nativeView.adSourceView.visibility = View.VISIBLE
            }
            else -> nativeView.adSourceView.visibility = View.INVISIBLE

        }

        when {
            nativeAd?.callToAction != null -> {
                (nativeView.callToActionView as Button).text = nativeAd.callToAction
                nativeView.callToActionView.visibility = View.VISIBLE
            }
            else -> nativeView.callToActionView.visibility = View.INVISIBLE
        }

        // если реклама содержит видео добавляем слушатель VideoLifecycleListener
        val videoOperator = nativeAd?.videoOperator
        if (videoOperator!!.hasVideo()) {
            videoOperator.videoLifecycleListener = videoLifecycleListener
        }

        nativeView.setNativeAd(nativeAd)
    }

    private val videoLifecycleListener: VideoLifecycleListener = object : VideoLifecycleListener() {
        override fun onVideoStart() {
        }

        override fun onVideoPlay() {
        }

        override fun onVideoEnd() {
        }
    }

    // получаем layout для отображения рекламы (для большого размера и видео использовается один тип, для маленькой рекламы другой)
    private fun getLayoutType(): Int {
        return when (typeRadioGroup.checkedRadioButtonId) {
            R.id.radio_button_small -> R.layout.native_small_template
            else -> R.layout.native_video_template
        }
    }

    // получаем id рекламы в зависимости от выбранного типа
    private fun getAdId(): String {
        return when (typeRadioGroup.checkedRadioButtonId) {
            R.id.radio_button_small -> getString(R.string.ad_native_small)
            R.id.radio_button_large -> getString(R.string.ad_native_large)
            R.id.radio_button_video -> getString(R.string.ad_native_video)
            else -> ""
        }
    }
}