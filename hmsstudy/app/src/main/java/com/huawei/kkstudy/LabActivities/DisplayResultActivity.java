package com.huawei.kkstudy.LabActivities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

import com.huawei.kkstudy.R;

public class DisplayResultActivity extends AppCompatActivity {

    public static final String DATA_KEY = "RESULT_TEXT";

    TextView resultTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_result);

        resultTextView = findViewById(R.id.resultView);
        resultTextView.setText(getIntent().getStringExtra(DATA_KEY));
    }
}