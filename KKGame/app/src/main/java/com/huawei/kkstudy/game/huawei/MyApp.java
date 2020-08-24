package com.huawei.kkstudy.game.huawei;

import android.app.Application;
import com.huawei.hms.api.HuaweiMobileServicesUtil;

public class MyApp extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        HuaweiMobileServicesUtil.setApplication(this);
    }

    @Override
    public void onTerminate() {
        super.onTerminate();
    }
}
