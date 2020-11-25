package com.kkostrov.drminfo;

import android.annotation.SuppressLint;
import android.drm.DrmInfo;
import android.drm.DrmInfoRequest;
import android.drm.DrmManagerClient;
import android.media.MediaDrm;
import android.media.UnsupportedSchemeException;
import android.os.Build;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.io.Console;
import java.lang.reflect.Method;
import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    LinearLayout mainContent;
    LinearLayout widevineContent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mainContent = findViewById(R.id.main_content);
        widevineContent = findViewById(R.id.widevine_content);

        systemInfo();

        getWVDrmInfo();

        classicDrmInfo();
    }

    private void addPair(ViewGroup view, String key, String value) {
        View keyValueView;

        keyValueView = View.inflate(this, R.layout.information_item_layout, null);
        TextView keyTV = keyValueView.findViewById(R.id.pair_key);
        keyTV.setText(key);
        TextView valueTV = keyValueView.findViewById(R.id.pair_value);
        valueTV.setText(value);

        view.addView(keyValueView);
    }

    private final UUID WIDEVINE_UUID = new UUID(0xEDEF8BA979D64ACEL, 0xA3C827DCD51D21EDL);
    private final UUID COMMON_PSSH_UUID = new UUID(0x1077EFECC0B24D02L, -0x531cc3e1ad1d04b5L);
    private final UUID CLEARKEY_UUID = new UUID(-0x1d8e62a7567a4c37L, 0x781AB030AF78D30EL);
    //private final UUID WIDEVINE_UUID = new UUID(-0x121074568629b532L, -0x5c37d8232ae2de13L);
    private final UUID PLAYREADY_UUID = new UUID(-0x65fb0f8667bfbd7aL, -0x546d19a41f77a06bL);


    private void getWVDrmInfo() {
        MediaDrm mediaDrm = null;
        try {
            mediaDrm = new MediaDrm(WIDEVINE_UUID);

            addPair(widevineContent, "Vendor:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VENDOR));
            addPair(widevineContent, "Version:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VERSION));
            addPair(widevineContent, "Description:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_DESCRIPTION));
            addPair(widevineContent, "Algorithms:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_ALGORITHMS));
            addPair(widevineContent, "Security Level:", mediaDrm.getPropertyString("securityLevel"));
            addPair(widevineContent, "System Id:", mediaDrm.getPropertyString("systemId"));
            addPair(widevineContent, "HDCP Level:", mediaDrm.getPropertyString("hdcpLevel"));
            addPair(widevineContent, "Max HDCP Level:", mediaDrm.getPropertyString("maxHdcpLevel"));
            addPair(widevineContent, "Usage Reporting Support:", mediaDrm.getPropertyString("usageReportingSupport"));
            addPair(widevineContent, "Max Sessions:", mediaDrm.getPropertyString("maxNumberOfSessions"));
            addPair(widevineContent, "Max Open Sessions:", mediaDrm.getPropertyString("numberOfOpenSessions"));

            mediaDrm.release();
        } catch (UnsupportedSchemeException e) {
            e.printStackTrace();
        }
    }

    private void classicDrmInfo() {

        DrmManagerClient drmManagerClient = new DrmManagerClient(this);
        String[] availableDrmEngines = drmManagerClient.getAvailableDrmEngines();

        addPair(widevineContent, "Engines: ", TextUtils.join(", ", availableDrmEngines));

        try {
            boolean result = drmManagerClient.canHandle("", "video/wvm");
            if (result) {
                DrmInfoRequest request = new DrmInfoRequest(DrmInfoRequest.TYPE_REGISTRATION_INFO, "video/wvm");
                request.put("WVPortalKey", "OEM");
                DrmInfo response = drmManagerClient.acquireDrmInfo(request);
                String status = (String) response.get("WVDrmInfoRequestStatusKey");

                status = new String[]{"HD_SD", null, "SD"}[Integer.parseInt(status)];

                addPair(widevineContent, "Videvine version: ", response.get("WVDrmInfoRequestVersionKey").toString());
                addPair(widevineContent, "Status: ", status);

            }
        } catch (Exception e) {
            Log.e("DRMInfo", "error" + e.getMessage() + '\n' + Log.getStackTraceString(e));
        }

        drmManagerClient.release();
    }

    private String chipSet() {
        try {
            @SuppressLint("PrivateApi")
            Class<?> aClass = Class.forName("android.os.SystemProperties");
            Method method = aClass.getMethod("get", String.class);
            Object platform = method.invoke(null, "ro.board.platform");

            return platform instanceof String ? (String) platform : "<" + platform + ">";
        } catch (Exception e) {
            return "<" + e + ">";
        }
    }

    private void systemInfo()  {
        addPair(mainContent,"Brand", Build.BRAND);
        addPair(mainContent,"Model", Build.MODEL);
        addPair(mainContent,"Manufacturer", Build.MANUFACTURER);
        addPair(mainContent,"Device", Build.DEVICE);
        addPair(mainContent,"Mianboard", chipSet());
        addPair(mainContent,"Android version", Build.VERSION.RELEASE);
        addPair(mainContent,"SDK Level", Integer.toString(Build.VERSION.SDK_INT));
        addPair(mainContent,"TAGS", Build.TAGS);
        addPair(mainContent,"Fingerprint", Build.FINGERPRINT);
        addPair(mainContent, "Architecture:", System.getProperty("os.arch"));
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            addPair(mainContent,"Supported ABIs", TextUtils.join(", ", Build.SUPPORTED_ABIS));
            addPair(mainContent,"Supported ABIs (32bit)", TextUtils.join(", ", Build.SUPPORTED_32_BIT_ABIS));
            addPair(mainContent,"Supported ABIs (64bits)", TextUtils.join(", ", Build.SUPPORTED_64_BIT_ABIS));
        }
    }

}