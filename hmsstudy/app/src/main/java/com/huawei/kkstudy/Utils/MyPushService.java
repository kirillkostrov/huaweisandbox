package com.huawei.kkstudy.Utils;

import android.util.Log;

import com.huawei.hms.push.HmsMessageService;
import com.huawei.kkstudy.Utils.MyApp;

public class MyPushService extends HmsMessageService {
    private static final String TAG = "PushDemoLog";

    @Override
    public void onNewToken(String s) {
        super.onNewToken(s);
        Log.i(TAG, "received token:" + s);

        ((MyApp)this.getApplication()).setLastPushToken(s);
    }
}
