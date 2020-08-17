package com.huawei.kkstudy;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.huawei.kkstudy.LabActivities.AuthKitActivity;
import com.huawei.kkstudy.LabActivities.IAPActivity;
import com.huawei.kkstudy.LabActivities.PushKitActivity;

public class RootActivity extends AppCompatActivity {

    public static final String NEW_TOKEN_ACTION = "com.huawei.kkstudy.ON_NEW_TOKEN";
    public static final String TOKEN_EXTRA_KEY = "com.huawei.kkstudy.TOKEN_KEY";
    public static final String MY_PREFERENCES = "MyPrefs";

    private String pushToken;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_root);
    }

    public void AccountKirClick(View view) {
        Intent openAuthKitActivity = new Intent(this, AuthKitActivity.class);
        startActivity(openAuthKitActivity);
    }

    public void PushKitClick(View view) {
        Intent openPushKitActivity = new Intent(this, PushKitActivity.class);
        startActivity(openPushKitActivity);
    }

    public void IAPLabClick(View view) {
        Intent startIAPActivity = new Intent(this, IAPActivity.class);
        startActivity(startIAPActivity);
    }
}