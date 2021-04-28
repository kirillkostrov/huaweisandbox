package com.vgtrk.smotrim;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Toast;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        String packageName = getPackageName();
        startPlayMarket(packageName);
        finish();
    }

    private void startPlayMarket(String component) {
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            String deepLinkUrl = "appmarket://details?id=" + component; // For Huawei AppGallery
            intent.setPackage("com.huawei.appmarket.tv");
            intent.setData(Uri.parse(deepLinkUrl));
            startActivity(intent);
        } catch (ActivityNotFoundException ex) {
            Toast.makeText(this, "Пожалуйста, установите наше приложение из AppGallery", Toast.LENGTH_SHORT).show();
        }
    }
}
