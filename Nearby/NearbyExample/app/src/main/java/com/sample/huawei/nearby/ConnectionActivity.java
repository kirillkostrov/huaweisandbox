package com.sample.huawei.nearby;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.provider.Settings;
import android.view.View;
import android.widget.Toast;

import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.discovery.BroadcastOption;
import com.huawei.hms.nearby.discovery.ConnectCallback;
import com.huawei.hms.nearby.discovery.ConnectInfo;
import com.huawei.hms.nearby.discovery.ConnectResult;
import com.huawei.hms.nearby.discovery.Policy;
import com.huawei.hms.nearby.discovery.ScanEndpointCallback;
import com.huawei.hms.nearby.discovery.ScanEndpointInfo;
import com.huawei.hms.nearby.discovery.ScanOption;

import java.util.Map;

import static com.sample.huawei.nearby.SearchDialogFragment.*;

public class ConnectionActivity extends AppCompatActivity {

    private Policy policy = Policy.POLICY_STAR;
    private final String SERVICE_ID = "com.sample.huawei.nearby";

    private String endpointName;
    private SearchDialogFragment searchDialogFragment;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connection);

        searchDialogFragment = new SearchDialogFragment(itemHandler, onCloseListener, onSelectListener);
        searchDialogFragment.setDialogTitle("Searching...");

        endpointName = Settings.Secure.getString(getContentResolver(), "bluetooth_name");
        if (endpointName == null || endpointName.isEmpty()) {
            endpointName = "UNKNOWN";
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        stopAdvertising();
        stopAdvertising();
    }

    private final ItemHandler itemHandler = new ItemHandler() {
        @Override
        public String getItemTitle(Object item) {
            return ((ScanEndpointInfo)item).getName();
        }

        @Override
        public String getItemStringContent(Object item) {
            ScanEndpointInfo info = (ScanEndpointInfo)item;
            return info.getServiceId() + "//" + info.getName();
        }
    };

    private final OnCloseListener onCloseListener = new OnCloseListener() {
        @Override
        public void onClose() {
            stopDiscovery();
        }
    };

    private final OnSelectListener onSelectListener = new OnSelectListener() {
        @Override
        public void OnItemSelected(Object item) {
            Map.Entry<String, ScanEndpointInfo> mapEntry = (Map.Entry<String, ScanEndpointInfo>)item;
            ScanEndpointInfo info = mapEntry.getValue();
            if (info != null) {
                Toast.makeText(getApplicationContext(), "Selected endpoint:" + info.getName(), Toast.LENGTH_LONG).show();
            }
        }
    };


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

    private ScanEndpointCallback scanEndpointCallback = new ScanEndpointCallback() {
                @Override
                public void onFound(String endpointId, ScanEndpointInfo discoveryEndpointInfo) {
                    Toast.makeText(getApplicationContext(), "Found: " + discoveryEndpointInfo.getName(), Toast.LENGTH_LONG).show();
                    searchDialogFragment.addItem(endpointId, discoveryEndpointInfo);
                    //mEndpointId = endpointId;
                    //mDiscoveryEngine.requestConnect(myNameStr, mEndpointId, mConnCb);
                }


                @Override
                public void onLost(String endpointId) {
                    searchDialogFragment.removeItem(endpointId);
                    Toast.makeText(getApplicationContext(), "onLost", Toast.LENGTH_LONG).show();
                }
            };

    private void startAdvertising() {
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

    private void startDiscovery() {
        searchDialogFragment.show(getSupportFragmentManager(), "Search endpoints");

        ScanOption scanOption = new ScanOption.Builder().setPolicy(policy).build();
        Nearby.getDiscoveryEngine(getApplicationContext())
                .startScan(SERVICE_ID, scanEndpointCallback, scanOption)
                .addOnSuccessListener(aVoid -> Toast.makeText(getApplicationContext(), "Start scan success", Toast.LENGTH_SHORT).show())
                .addOnFailureListener(e -> Toast.makeText(getApplicationContext(), "Start scan failure", Toast.LENGTH_SHORT).show());
    }

    private void stopAdvertising() {
        Nearby.getDiscoveryEngine(getApplicationContext()).stopBroadcasting();
    }

    private void stopDiscovery() {
        Nearby.getDiscoveryEngine(getApplicationContext()).stopScan();
    }


}