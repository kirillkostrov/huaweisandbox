package com.huawei.kkostrov.nearby;

import android.Manifest;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DividerItemDecoration;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;


import com.huawei.kkostrov.nearby.utils.BluetoothCheckUtil;
import com.huawei.kkostrov.nearby.utils.LocationCheckUtil;
import com.huawei.kkostrov.nearby.utils.NetCheckUtil;
import com.huawei.kkostrov.nearby.utils.PermissionUtil;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private ArrayList<MainMenuItem> dataSet;

    private RecyclerView recyclerView;

    private static final String TAG = MainActivity.class.getSimpleName();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        dataSet = new ArrayList<MainMenuItem>();
        dataSet.add(new MainMenuItem("Message Engine", MessageEngineActivity.class));

        recyclerView = findViewById(R.id.rv);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        recyclerView.setAdapter(new RvAdapter(dataSet, this));
        recyclerView.addItemDecoration(new DividerItemDecoration(this, DividerItemDecoration.VERTICAL));

        checkPermission();
    }

    private void checkPermission() {
        if (!BluetoothCheckUtil.isBlueEnabled()) {
            showWarnDialog("Bluetooth is unavailable. Turn on Bluetooth and run this app again.");
            return;
        }

        if (!LocationCheckUtil.isLocationEnabled(this)) {
            showWarnDialog("Location is unavailable. Turn on Location and run this app again.");
            return;
        }

        if (!NetCheckUtil.isNetworkAvailable(this)) {
            showWarnDialog("No Internet access. Make sure you have Internet access and run this app again.");
            return;
        }

        String[] deniedPermission = PermissionUtil.getDeniedPermissions(this, new String[] {
                Manifest.permission.ACCESS_COARSE_LOCATION,
                Manifest.permission.ACCESS_FINE_LOCATION
        });
        if (deniedPermission.length > 0) {
            PermissionUtil.requestPermissions(this, deniedPermission, 10);
        }
    }

    private void showWarnDialog(String content) {
        DialogInterface.OnClickListener onClickListener = (dialog, which) -> android.os.Process.killProcess(android.os.Process.myPid());
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle(R.string.warn);
        builder.setIcon(R.drawable.ic_warn);
        builder.setMessage(content);
        builder.setNegativeButton(R.string.confirm, onClickListener);
        builder.show();
    }
}

