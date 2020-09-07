package com.huawei.kkstudy.LabActivities.Nearby;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.nearby.Nearby;
//import com.huawei.hms.nearby.NearbyApiContext;
import com.huawei.hms.nearby.NearbyApiContext;
import com.huawei.hms.nearby.discovery.BleSignal;
import com.huawei.hms.nearby.discovery.Distance;
import com.huawei.hms.nearby.message.Message;
import com.huawei.hms.nearby.message.MessageHandler;
import com.huawei.kkstudy.R;

public class NearbyMainActivity extends AppCompatActivity {

    private static final String TAG = "NearbyKitDemo";
    MessageHandler messageHandler;
    TextView mLog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nearby_main);

        mLog = findViewById(R.id.scan_result);
        NearbyApiContext.getInstance().setApiKey(AGConnectServicesConfig.fromContext(this).getString("client/api_key"));
        messageHandler = new MessageHandler() {
            @Override
            public void onFound(Message message) {
                log("onFound " + new String(message.getContent()));
            }
            @Override
            public void onLost(Message message) {
                log("onLost " + new String(message.getContent()));
            }
            @Override
            public void onBleSignalChanged(Message message, BleSignal bleSignal) {
                log("onBleSignalChanged " + new String(message.getContent()) + " " + bleSignal.getRssi());
            }
            @Override
            public void onDistanceChanged(Message message, Distance distance) {
                log("onDistanceChanged " + new String(message.getContent()) + " " + distance.getMeters());
            }
        };

        checkPermission();
    }

    public void startDiscovery(View view) {
        Nearby.getMessageEngine(this).get(messageHandler);
    }

    public void stopDiscovery(View view) {
        Nearby.getMessageEngine(this).unget(messageHandler);
    }

    private void log(String message) {
        mLog.setText(mLog.getText() + System.getProperty("line.separator") + message);
        Log.i(TAG, message);
    }

    private boolean checkPermission() {
        int coarsePermission = ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION);
        int finePermission = ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION);

        int blePermission = ContextCompat.checkSelfPermission(this, Manifest.permission.BLUETOOTH);
        int bleAdminPermission = ContextCompat.checkSelfPermission(this, Manifest.permission.BLUETOOTH_ADMIN);
        if ((coarsePermission == PackageManager.PERMISSION_GRANTED)
                && (finePermission == PackageManager.PERMISSION_GRANTED)
                && (blePermission == PackageManager.PERMISSION_GRANTED)
                && (bleAdminPermission == PackageManager.PERMISSION_GRANTED)) {
            return true;
        }
        requestPermission();
        return false;
    }

    private void requestPermission() {
        String[] permission = {Manifest.permission.BLUETOOTH, Manifest.permission.BLUETOOTH_ADMIN,
                Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION};
        ActivityCompat.requestPermissions(this, permission,
                1);
    }


    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode == 1) {
            if (grantResults.length > 1 && grantResults[0] == PackageManager.PERMISSION_GRANTED
                    && grantResults[1] == PackageManager.PERMISSION_GRANTED) {
                Log.i(TAG, "onRequestPermissionsResult: apply LOCATION PERMISSION successful");
            } else {
                Log.i(TAG, "onRequestPermissionsResult: apply LOCATION PERMISSSION  failed");
            }
        }

        if (requestCode == 2) {
            if (grantResults.length > 2 && grantResults[2] == PackageManager.PERMISSION_GRANTED
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED
                    && grantResults[1] == PackageManager.PERMISSION_GRANTED) {
                Log.i(TAG, "onRequestPermissionsResult: apply ACCESS_BACKGROUND_LOCATION successful");
            } else {
                Log.i(TAG, "onRequestPermissionsResult: apply ACCESS_BACKGROUND_LOCATION  failed");
            }
        }
    }

}