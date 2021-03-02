package com.huawei.example.bumperapp;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void UpdateClick(View view) {
        try {
            String appId = "com.ipspirates.ort";
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("appmarket://details?id=" + appId));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
        } catch (ActivityNotFoundException ex) {
            Toast.makeText(this, "DEBUG: AppGallery not found", Toast.LENGTH_SHORT).show();
        }
    }
}