package com.huawei.kkstudy;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;

import com.huawei.hms.analytics.HiAnalytics;
import com.huawei.hms.analytics.HiAnalyticsInstance;
import com.huawei.hms.hmsscankit.ScanKitActivity;
import com.huawei.kkstudy.LabActivities.Analytics.MainActivity;
import com.huawei.kkstudy.LabActivities.AuthKitActivity;
import com.huawei.kkstudy.LabActivities.IAPActivity;
import com.huawei.kkstudy.LabActivities.IdentityKitActivity;
import com.huawei.kkstudy.LabActivities.LocationActivity;
import com.huawei.kkstudy.LabActivities.MapActivity;
import com.huawei.kkstudy.LabActivities.Nearby.NearbyMainActivity;
import com.huawei.kkstudy.LabActivities.PanoramaActivity;
import com.huawei.kkstudy.LabActivities.PushKitActivity;
import com.huawei.kkstudy.LabActivities.SafetyKitActivity;
import com.huawei.kkstudy.LabActivities.SiteKitActivity;

public class RootActivity extends Activity implements OnClickListener {

    public static final String NEW_TOKEN_ACTION = "com.huawei.kkstudy.ON_NEW_TOKEN";
    public static final String TOKEN_EXTRA_KEY = "com.huawei.kkstudy.TOKEN_KEY";
    public static final String MY_PREFERENCES = "MyPrefs";

    HiAnalyticsInstance analyticsInstance;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_root);

        analyticsInstance = HiAnalytics.getInstance(this);
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.account_button:
                startActivity(new Intent(this, AuthKitActivity.class));
                break;
            case R.id.push_button:
                startActivity(new Intent(this, PushKitActivity.class));
                break;
            case R.id.iap_button:
                startActivity(new Intent(this, IAPActivity.class));
                break;
            case R.id.analytics_button:
                startActivity(new Intent(this, MainActivity.class));
                break;
            case R.id.location_button:
                startActivity(new Intent(this, LocationActivity.class));
                break;
            case R.id.scan_button:
                startActivity(new Intent(this, ScanKitActivity.class));
                break;
            case R.id.safety_button:
                startActivity(new Intent(this, SafetyKitActivity.class));
                break;
            case R.id.site_button:
                startActivity(new Intent(this, SiteKitActivity.class));
                break;
            case R.id.map_button:
                startActivity(new Intent(this, MapActivity.class));
                break;
            case R.id.identity_button:
                startActivity(new Intent(this, IdentityKitActivity.class));
                break;
            case R.id.panorama_button:
                startActivity(new Intent(this, PanoramaActivity.class));
                break;
            case R.id.nearby_button:
                startActivity(new Intent(this, NearbyMainActivity.class));
                break;
            default:
                break;
        }
    }

}