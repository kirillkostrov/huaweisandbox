package com.huawei.kkstudy.LabActivities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.TextView;

import com.huawei.kkstudy.Utils.MyApp;
import com.huawei.kkstudy.R;

public class PushKitActivity extends AppCompatActivity {

    private TextView tokenTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_push_kit);

        tokenTextView = findViewById(R.id.tokenContents);
        String token = ((MyApp)this.getApplication()).getLastPushToken();
        Log.d("PushKit", "Push token: " + token);
        tokenTextView.setText(token);
    }

}