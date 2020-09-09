package com.huawei.hms.ads6;

import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.huawei.hms.ads.R;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private ArrayList<AdFormat> dataSet;

    private RecyclerView recyclerView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        dataSet = new ArrayList<AdFormat>();
        dataSet.add(new AdFormat("Banner Ad", BannerActivity.class));
        dataSet.add(new AdFormat("Interstitial Ad", InterstitialActivity.class));
        dataSet.add(new AdFormat("Native Ad", NativeActivity.class));
        dataSet.add(new AdFormat("Reward Ad", RewardActivity.class));

        recyclerView = findViewById(R.id.rv);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        recyclerView.setAdapter(new RvAdapter(dataSet, this));
        recyclerView.addItemDecoration(new DividerItemDecoration(this, DividerItemDecoration.VERTICAL));
    }
}

