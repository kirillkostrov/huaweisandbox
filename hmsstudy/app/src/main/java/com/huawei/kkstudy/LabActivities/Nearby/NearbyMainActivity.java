package com.huawei.kkstudy.LabActivities.Nearby;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.nearby.Nearby;
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


}