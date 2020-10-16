package com.sample.huawei.nearby;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.provider.Settings;
import android.view.View;
import android.widget.TextView;
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

    private Boolean isBroadcasting = false;
    private String endpointName;
    private SearchDialogFragment<ScanEndpointInfo> searchDialogFragment;
    private TextView broadCastingItemTextView;
    private TextView status;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_connection);

        status = findViewById(R.id.status);
        broadCastingItemTextView = findViewById(R.id.start_broadcast_item);
        searchDialogFragment = new SearchDialogFragment<>(itemHandler, onCloseListener, onSelectListener);
        searchDialogFragment.setDialogTitle("Searching...");

        setStatus("");

        endpointName = Settings.Secure.getString(getContentResolver(), "bluetooth_name");
        if (endpointName == null || endpointName.isEmpty()) {
            endpointName = "UNKNOWN";
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        stopAdvertising();
        stopDiscovery();
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
        if (!isBroadcasting) {
            startAdvertising();
        } else {
            stopAdvertising();
        }
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

    private final ScanEndpointCallback scanEndpointCallback = new ScanEndpointCallback() {
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
        stopDiscovery();
        BroadcastOption broadcastOption = new BroadcastOption.Builder().setPolicy (policy).build();
        Nearby.getDiscoveryEngine(getApplicationContext())
                .startBroadcasting(endpointName, SERVICE_ID, connectionCallback, broadcastOption)
                .addOnSuccessListener(aVoid -> {
                    setStatus("Advertising");
                    isBroadcasting = true;
                    broadCastingItemTextView.setText(getString(R.string.start_broadcasting_item_text_stop));
                    //Toast.makeText(getApplicationContext(), "startAdvertising OnSuccess", Toast.LENGTH_LONG).show();
                })
                .addOnFailureListener(e -> {
                    Toast.makeText(getApplicationContext(), "startAdvertising OnFailure", Toast.LENGTH_LONG).show();
                });
    }

    private void startDiscovery() {
        stopAdvertising();
        searchDialogFragment.show(getSupportFragmentManager(), "Search endpoints");

        ScanOption scanOption = new ScanOption.Builder().setPolicy(policy).build();
        Nearby.getDiscoveryEngine(getApplicationContext())
                .startScan(SERVICE_ID, scanEndpointCallback, scanOption)
                .addOnSuccessListener(aVoid -> {
                    setStatus("Discovering");
                    //Toast.makeText(getApplicationContext(), "Start scan success", Toast.LENGTH_SHORT).show();
                })
                .addOnFailureListener(e -> Toast.makeText(getApplicationContext(), "Start scan failure", Toast.LENGTH_SHORT).show());
    }

    private void stopAdvertising() {
        setStatus("");
        isBroadcasting = false;
        broadCastingItemTextView.setText(getString(R.string.start_broadcasting_item_text_start));
        Nearby.getDiscoveryEngine(getApplicationContext()).stopBroadcasting();
    }

    private void stopDiscovery() {
        setStatus("");
        Nearby.getDiscoveryEngine(getApplicationContext()).stopScan();
    }

    private void setStatus (String status) {
        this.status.setText(String.format("Status: %s", !status.isEmpty() ? status : "Idle"));
    }
}