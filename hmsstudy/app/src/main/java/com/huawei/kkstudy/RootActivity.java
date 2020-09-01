package com.huawei.kkstudy;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;
import com.huawei.kkstudy.LabActivities.Analytics.MainActivity;
import com.huawei.kkstudy.LabActivities.AuthKitActivity;
import com.huawei.kkstudy.LabActivities.IAPActivity;
import com.huawei.kkstudy.LabActivities.IdentityKitActivity;
import com.huawei.kkstudy.LabActivities.LocationActivity;
import com.huawei.kkstudy.LabActivities.MapActivity;
import com.huawei.kkstudy.LabActivities.PushKitActivity;
import com.huawei.kkstudy.LabActivities.SafetyKitActivity;
import com.huawei.kkstudy.LabActivities.ScanActivity;
import com.huawei.kkstudy.LabActivities.SiteKitActivity;

public class RootActivity extends Activity implements OnClickListener {

    public static final String NEW_TOKEN_ACTION = "com.huawei.kkstudy.ON_NEW_TOKEN";
    public static final String TOKEN_EXTRA_KEY = "com.huawei.kkstudy.TOKEN_KEY";
    public static final String MY_PREFERENCES = "MyPrefs";

    HiAnalyticsInstance analyticsInstance;

    private String pushToken;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_root);

        analyticsInstance = HiAnalytics.getInstance(this);
    }

    public void openAccountKitLab() {
        Intent openAuthKitActivity = new Intent(this, AuthKitActivity.class);
        startActivity(openAuthKitActivity);
    }

    public void openPushKitLab() {
        Intent openPushKitActivity = new Intent(this, PushKitActivity.class);
        startActivity(openPushKitActivity);
    }

    public void openIAPLab() {
        Intent startIAPActivity = new Intent(this, IAPActivity.class);
        startActivity(startIAPActivity);
    }

    public void openAnalyticsLab() {
        Intent startHiAnalyticsActivity = new Intent(this, MainActivity.class);
        startActivity(startHiAnalyticsActivity);
    }

    public void openLocationKitLab() {
        Intent startLocationKitActivity = new Intent(this, LocationActivity.class);
        startActivity(startLocationKitActivity);
    }

    public void openScanKitLab() {
        Intent scanKitActivity = new Intent(this, ScanActivity.class);
        startActivity(scanKitActivity);
    }

    public void openSafetyKitLab() {
        Intent safetyKitActivity = new Intent(this, SafetyKitActivity.class);
        startActivity(safetyKitActivity);
    }


    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.account_button:
                openAccountKitLab();
                break;
            case R.id.push_button:
                openPushKitLab();
                break;
            case R.id.iap_button:
                openIAPLab();
                break;
            case R.id.analytics_button:
                openAnalyticsLab();
                break;
            case R.id.location_button:
                openLocationKitLab();
                break;
            case R.id.scan_button:
                openScanKitLab();
                break;
            case R.id.safety_button:
                openSafetyKitLab();
                break;
            case R.id.site_button:
                openSiteKitLab();
                break;
            case R.id.map_button:
                openMapKitLab();
                break;
            case R.id.identity_button:
                openIdentityKit();
                break;
            default:
                break;
        }
    }

    private void openIdentityKit() {
        Intent identityKitActivity = new Intent(this, IdentityKitActivity.class);
        startActivity(identityKitActivity);
    }

    private void openMapKitLab() {
        Intent mapActivity = new Intent(this, MapActivity.class);
        startActivity(mapActivity);
    }

    private void openSiteKitLab() {
        Intent siteKitActivity = new Intent(this, SiteKitActivity.class);
        startActivity(siteKitActivity);
    }
}