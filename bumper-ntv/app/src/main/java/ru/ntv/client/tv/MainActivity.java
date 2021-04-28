package ru.ntv.client.tv;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        startGooglePlay();
    }

    private void startGooglePlay() {
        final String packageName = getPackageName();

        Intent intent = new Intent(Intent.ACTION_VIEW);
        try {
            intent.setData(Uri.parse("appmarket://details?id=" + packageName));
            startActivity(intent);
        } catch (Throwable ignored) {
            finish();
        }
    }
}
