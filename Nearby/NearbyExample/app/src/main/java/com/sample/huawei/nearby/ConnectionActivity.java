package com.sample.huawei.nearby;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.os.RemoteException;
import android.provider.Settings;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.StatusCode;
import com.huawei.hms.nearby.discovery.BroadcastOption;
import com.huawei.hms.nearby.discovery.ConnectCallback;
import com.huawei.hms.nearby.discovery.ConnectInfo;
import com.huawei.hms.nearby.discovery.ConnectResult;
import com.huawei.hms.nearby.discovery.Policy;
import com.huawei.hms.nearby.discovery.ScanEndpointCallback;
import com.huawei.hms.nearby.discovery.ScanEndpointInfo;
import com.huawei.hms.nearby.discovery.ScanOption;
import com.huawei.hms.nearby.transfer.Data;
import com.huawei.hms.nearby.transfer.DataCallback;
import com.huawei.hms.nearby.transfer.TransferStateUpdate;

import java.util.Map;

import static com.sample.huawei.nearby.SearchDialogFragment.*;

public class ConnectionActivity extends AppCompatActivity {

    private final String TAG = "com.sample.huawei.nearby";
    private Policy policy = Policy.POLICY_STAR;
    private final String SERVICE_ID = "com.sample.huawei.nearby";

    private Boolean isBroadcasting = false;
    private Boolean isConnected = false;
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
                //Toast.makeText(ConnectionActivity.this, "Selected endpoint:" + info.getName(), Toast.LENGTH_LONG).show();
                doStartConnection(mapEntry.getKey(), info.getName());
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
//        @Override
//        public void onEstablish(String endpointId, ConnectInfo connectInfo) {
//            /* Accept the connection request without notifying user.
//            * normally we would like to ask user if he want to accept */
//            Nearby.getDiscoveryEngine(ConnectionActivity.this).acceptConnect(connectInfo.getEndpointName(), () -> {return true;});
//            Toast.makeText(ConnectionActivity.this, "onEstablish", Toast.LENGTH_LONG).show();
//        }

        @Override
        public void onEstablish(String endpointId, ConnectInfo connectInfo) {
            AlertDialog.Builder builder = new AlertDialog.Builder(ConnectionActivity.this);
            builder
                    .setTitle(connectInfo.getEndpointName() + " request connection")
                    .setMessage("Please confirm the match code is: " + connectInfo.getAuthCode())
                    .setPositiveButton(
                            "Accept",
                            (dialog,  which) ->
                            {
                               Toast.makeText(ConnectionActivity.this, "Accepting connection", Toast.LENGTH_LONG).show();
                               //Nearby.getDiscoveryEngine(ConnectionActivity.this).acceptConnect(endpointId, new ReceiveBytesDataListener());
                            })

                    .setNegativeButton(
                            "Reject",
                            (DialogInterface dialog, int which) ->
                                    /* Reject the connection. */
                                    Nearby.getDiscoveryEngine(ConnectionActivity.this).rejectConnect(endpointId))
                    .setIcon(android.R.drawable.ic_dialog_alert);
            AlertDialog alert = builder.create();
            alert.show();
        }

        @Override
        public void onResult(String endpointId, ConnectResult connectResult) {
            switch (connectResult.getStatus().getStatusCode()) {
                case StatusCode.STATUS_SUCCESS:
                    /* The connection was established successfully, we can exchange data. */
                    setStatus(String.format("Connected to: %s", endpointId));
                    break;
                case StatusCode.STATUS_CONNECT_REJECTED:
                    setStatus("");
                    /* The Connection was rejected. */
                    break;
                default:
                    /* other unknown status code */
            }
            Toast.makeText(ConnectionActivity.this, "onResult", Toast.LENGTH_LONG).show();
        }

        @Override
        public void onDisconnected(String s) {
            /* The connection was disconnected. */
            Toast.makeText(ConnectionActivity.this, "onDisconnected", Toast.LENGTH_LONG).show();
        }
    };

    static class ReceiveBytesDataListener extends DataCallback {
        @Override
        public void onReceived(String endpointId, Data data) {
            /* BYTES data is sent as a single block, so we can get complete data. */
            if (data.getType() == Data.Type.BYTES) {
                byte[] receivedBytes = data.asBytes();
            }
        }

        @Override
        public void onTransferUpdate(String endpointId, TransferStateUpdate transferStateUpdate) {
            /* onTransferUpdate */
        }
    }

    private final ScanEndpointCallback scanEndpointCallback = new ScanEndpointCallback() {
                @Override
                public void onFound(String endpointId, ScanEndpointInfo discoveryEndpointInfo) {
                    Toast.makeText(ConnectionActivity.this, "Found: " + discoveryEndpointInfo.getName(), Toast.LENGTH_LONG).show();
                    searchDialogFragment.addItem(endpointId, discoveryEndpointInfo);
                    //mEndpointId = endpointId;
                    //mDiscoveryEngine.requestConnect(myNameStr, mEndpointId, mConnCb);
                }


                @Override
                public void onLost(String endpointId) {
                    searchDialogFragment.removeItem(endpointId);
                    Toast.makeText(ConnectionActivity.this, "onLost", Toast.LENGTH_LONG).show();
                }
            };

    private void startAdvertising() {
        stopDiscovery();
        BroadcastOption broadcastOption = new BroadcastOption.Builder().setPolicy (policy).build();
        Nearby.getDiscoveryEngine(ConnectionActivity.this)
                .startBroadcasting(endpointName, SERVICE_ID, connectionCallback, broadcastOption)
                .addOnSuccessListener(aVoid -> {
                    setStatus("Advertising");
                    isBroadcasting = true;
                    broadCastingItemTextView.setText(getString(R.string.start_broadcasting_item_text_stop));
                    //Toast.makeText(ConnectionActivity.this, "startAdvertising OnSuccess", Toast.LENGTH_LONG).show();
                })
                .addOnFailureListener(e -> {
                    Toast.makeText(ConnectionActivity.this, "startAdvertising OnFailure", Toast.LENGTH_LONG).show();
                });
    }

    private void startDiscovery() {
        stopAdvertising();
        searchDialogFragment.show(getSupportFragmentManager(), "Search endpoints");

        ScanOption scanOption = new ScanOption.Builder().setPolicy(policy).build();
        Nearby.getDiscoveryEngine(ConnectionActivity.this)
                .startScan(SERVICE_ID, scanEndpointCallback, scanOption)
                .addOnSuccessListener(aVoid -> {
                    setStatus("Discovering");
                    //Toast.makeText(ConnectionActivity.this, "Start scan success", Toast.LENGTH_SHORT).show();
                })
                .addOnFailureListener(e -> Toast.makeText(ConnectionActivity.this, "Start scan failure", Toast.LENGTH_SHORT).show());
    }

    private void stopAdvertising() {
        setStatus("");
        isBroadcasting = false;
        broadCastingItemTextView.setText(getString(R.string.start_broadcasting_item_text_start));
        Nearby.getDiscoveryEngine(ConnectionActivity.this).stopBroadcasting();
    }

    private void stopDiscovery() {
        setStatus("");
        Nearby.getDiscoveryEngine(ConnectionActivity.this).stopScan();
    }

    public void doStartConnection(String endpointId, String remoteEndpointName) {
        Nearby.getDiscoveryEngine(ConnectionActivity.this)
                .requestConnect(endpointName, endpointId, connectionCallback)
                .addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void aVoid) {
                        setStatus(String.format("Connecting to: %s(%s)", endpointId, remoteEndpointName));
                        /* Request success, connecting. */
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(Exception e) {
                        Toast.makeText(ConnectionActivity.this, "requestConnect onFailure ", Toast.LENGTH_LONG).show();
                        /* Fail to request connect. */
                    }
                });
    }

    private void setStatus (String status) {
        this.status.setText(String.format("Status: %s", !status.isEmpty() ? status : "Idle"));
    }
}