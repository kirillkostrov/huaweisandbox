package com.kkostrov.exoplayerdemo;

import androidx.appcompat.app.AppCompatActivity;
import androidx.media2.exoplayer.external.SimpleExoPlayer;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SimpleExoPlayer player = new SimpleExoPlayer.Builder(context).build();
    }
}