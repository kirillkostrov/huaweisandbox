package com.huawei.kkstudy.LabActivities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageButton;
import android.widget.RelativeLayout;
import android.widget.Toast;

import com.huawei.hms.panorama.Panorama;
import com.huawei.hms.panorama.PanoramaInterface;
import com.huawei.kkstudy.R;

public class PanoramaActivity extends AppCompatActivity implements View.OnClickListener, View.OnTouchListener {

    private static final String TAG = "PanoramaActivity";

    private PanoramaInterface.PanoramaLocalInterface mLocalInterface;

    private ImageButton mImageButton;

    private boolean mChangeButtonCompass = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_panorama);

//        Intent intent = getIntent();
//        Uri uri = intent.getData();
//        int type = intent.getIntExtra("PanoramaType", PanoramaInterface.IMAGE_TYPE_SPHERICAL);

        Uri uri = Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.pano);

        callLocalApi(uri, PanoramaInterface.IMAGE_TYPE_SPHERICAL);
    }

    private void callLocalApi(Uri uri, int type) {
        mLocalInterface = Panorama.getInstance().getLocalInstance(this);

        if (uri == null || mLocalInterface == null) {
            Log.e(TAG, "uri or local api is null");
            finish();
            return;
        }

        if (mLocalInterface.init() == 0 && mLocalInterface.setImage(uri, type) == 0) {
            // getview and add to layout
            View view = mLocalInterface.getView();
            RelativeLayout layout = findViewById(R.id.relativeLayout);
            layout.addView(view);

            // update MotionEvent to sdk
            view.setOnTouchListener(this);

            // change control mode
            mImageButton = findViewById(R.id.changeButton);
            mImageButton.bringToFront();
            mImageButton.setOnClickListener(this);
        } else {
            Log.e(TAG, "local api error");
            Toast.makeText(this, "Local init error!", Toast.LENGTH_LONG).show();
        }
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.changeButton) {
            if (mChangeButtonCompass) {
                mImageButton.setImageDrawable(getResources().getDrawable(R.drawable.ic_compass));
                mChangeButtonCompass = false;
                mLocalInterface.setControlMode(PanoramaInterface.CONTROL_TYPE_TOUCH);

                // dynamic change image
                // Uri uri = Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.pano);
                // mLocalInterface.setImage(uri, PanoramaApiExt.IMAGE_TYPE_SPHERICAL);
            } else {
                mImageButton.setImageDrawable(getResources().getDrawable(R.drawable.ic_touch));
                mChangeButtonCompass = true;
                mLocalInterface.setControlMode(PanoramaInterface.CONTROL_TYPE_POSE);

                // dynamic change image
                // Uri uri = Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.pano2);
                // mLocalInterface.setImage(uri, PanoramaApiExt.IMAGE_TYPE_SPHERICAL);
            }
        }
    }

    @Override
    public boolean onTouch(View v, MotionEvent event) {
        if (mLocalInterface != null) {
            mLocalInterface.updateTouchEvent(event);
        }
        return true;
    }

    @Override
    protected void onDestroy() {
        Log.d(TAG, "onDestroy");
        if (mLocalInterface != null) {
            mLocalInterface.deInit();
        }
        super.onDestroy();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        Log.d(TAG, "onConfigurationChanged");
        super.onConfigurationChanged(newConfig);
    }
}