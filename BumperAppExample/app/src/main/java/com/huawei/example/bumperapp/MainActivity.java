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
            // Здесь необходимо использовать имя пакета вашего приложения. Так как имя пакета и сертификат
            // у бампера такой же, как у основного приложения, он просто будет заменён основным приложением при обновлении.
            // versionCode в build.gradle должен быть заведомо ниже, чем у основного приложения

            String appId = "your.app.package.name";
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("appmarket://details?id=" + appId));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
        } catch (ActivityNotFoundException ex) {
            Toast.makeText(this, "DEBUG: AppGallery not found", Toast.LENGTH_SHORT).show();
        }
    }
}