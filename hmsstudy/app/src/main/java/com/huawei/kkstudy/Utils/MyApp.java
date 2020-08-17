package com.huawei.kkstudy.Utils;

import android.app.Application;

public class MyApp extends Application {
    private String lastPushToken;

    public void setLastPushToken(String s) {
        lastPushToken = s;
    }

    public String getLastPushToken() {
        return lastPushToken;
    }
}
