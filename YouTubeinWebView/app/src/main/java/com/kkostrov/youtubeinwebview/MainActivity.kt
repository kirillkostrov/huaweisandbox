package com.kkostrov.youtubeinwebview

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val myYouTubeVideoUrl = "https://www.youtube.com/embed/YVRe9wd2j6w"

        val dataUrl = "<html>" +
                "<body>" +
                "<iframe width=\"560\" height=\"315\" src=\"" + myYouTubeVideoUrl + "\" frameborder=\"0\" allowfullscreen/>" +
                "</body>" +
                "</html>"

        val myWebView = findViewById<WebView>(R.id.wv1)

        val webSettings = myWebView.settings

        webSettings.javaScriptEnabled = true
        myWebView.settings.layoutAlgorithm = WebSettings.LayoutAlgorithm.SINGLE_COLUMN
        myWebView.settings.loadWithOverviewMode = true
        myWebView.settings.useWideViewPort = true
        myWebView.loadData(dataUrl, "text/html", "utf-8")
    }
}