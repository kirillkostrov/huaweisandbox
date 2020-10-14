package com.sample.huawei.nearby;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.discovery.BroadcastOption;
import com.huawei.hms.nearby.discovery.ConnectCallback;
import com.huawei.hms.nearby.discovery.ConnectInfo;
import com.huawei.hms.nearby.discovery.ConnectResult;
import com.huawei.hms.nearby.discovery.Policy;
import com.huawei.hms.nearby.discovery.ScanEndpointCallback;
import com.huawei.hms.nearby.discovery.ScanEndpointInfo;
import com.huawei.hms.nearby.discovery.ScanOption;

public class ConnectionActivity extends AppCompatActivity {

    private Policy policy = Policy.POLICY_STAR;
    private final String SERVICE_ID = "com.sample.huawei.nearby";

    private String endpointName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connection);

        endpointName = Settings.Secure.getString(getContentResolver(), "bluetooth_name");
        if (endpointName == null || endpointName.isEmpty()) {
            endpointName = "UNKNOWN";
        }
    }

    public void startBroadcastingItemClick(View view) {
        startAdvertising();
    }

    public void startScanItemClick(View view) {
        startDiscovery();
    }

    private ConnectCallback connectionCallback = new ConnectCallback() {
        @Override
        public void onEstablish(String s, ConnectInfo connectInfo) {
            Toast.makeText(getApplicationContext(), "onEstablish", Toast.LENGTH_LONG).show();
        }

        @Override
        public void onResult(String s, ConnectResult connectResult) {
            Toast.makeText(getApplicationContext(), "onResult", Toast.LENGTH_LONG).show();
        }

        @Override
        public void onDisconnected(String s) {
            Toast.makeText(getApplicationContext(), "onDisconnected", Toast.LENGTH_LONG).show();
        }
    };

    private ScanEndpointCallback scanEndpointCallback =
            new ScanEndpointCallback() {
                @Override
                public void onFound(String endpointId, ScanEndpointInfo discoveryEndpointInfo) {
                    Toast.makeText(getApplicationContext(), "Found: " + endpointId, Toast.LENGTH_LONG).show();
                    //mEndpointId = endpointId;
                    //mDiscoveryEngine.requestConnect(myNameStr, mEndpointId, mConnCb);
                }


                @Override
                public void onLost(String endpointId) {
                    Toast.makeText(getApplicationContext(), "onLost", Toast.LENGTH_LONG).show();
                }
            };

    public void startAdvertising() {
        BroadcastOption broadcastOption = new BroadcastOption.Builder().setPolicy (policy).build();
        Nearby.getDiscoveryEngine(getApplicationContext())
                .startBroadcasting(endpointName, SERVICE_ID, connectionCallback, broadcastOption)
                .addOnSuccessListener(aVoid -> {
                    Toast.makeText(getApplicationContext(), "startAdvertising OnSuccess", Toast.LENGTH_LONG).show();
                })
                .addOnFailureListener(e -> {
                    Toast.makeText(getApplicationContext(), "startAdvertising OnFailure", Toast.LENGTH_LONG).show();
                });
    }

    public void startDiscovery() {
        ScanOption scanOption = new ScanOption.Builder().setPolicy(policy).build();
        Nearby.getDiscoveryEngine(getApplicationContext())
                .startScan(SERVICE_ID, scanEndpointCallback, scanOption)
                .addOnSuccessListener(aVoid -> Toast.makeText(getApplicationContext(), "Start scan success", Toast.LENGTH_SHORT).show())
                .addOnFailureListener(e -> Toast.makeText(getApplicationContext(), "Start scan failure", Toast.LENGTH_SHORT).show());
    }

}