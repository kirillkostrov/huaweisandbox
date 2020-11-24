package com.kkostrov.drminfo;

import android.media.MediaDrm;
import android.media.UnsupportedSchemeException;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    LinearLayout mainContent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mainContent = findViewById(R.id.main_content);

        getWVDrmInfo();
    }

    private void addPair(String key, String value) {
        View keyValueView;

        keyValueView = View.inflate(this, R.layout.information_item_layout, null);
        TextView keyTV = keyValueView.findViewById(R.id.pair_key);
        keyTV.setText(key);
        TextView valueTV = keyValueView.findViewById(R.id.pair_value);
        valueTV.setText(value);

        mainContent.addView(keyValueView);
    }

    private final UUID WIDEVINE_UUID = new UUID(0xEDEF8BA979D64ACEL, 0xA3C827DCD51D21EDL);

    private void getWVDrmInfo() {
        MediaDrm mediaDrm = null;
        try {
            mediaDrm = new MediaDrm(WIDEVINE_UUID);

            addPair("Vendor:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VENDOR));
            addPair("Version:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_VERSION));
            addPair("Description:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_DESCRIPTION));
            addPair("Algorithms:", mediaDrm.getPropertyString(MediaDrm.PROPERTY_ALGORITHMS));
            addPair("Security Level:", mediaDrm.getPropertyString("securityLevel"));
            addPair("System Id:", mediaDrm.getPropertyString("systemId"));
            addPair("HDCP Level:", mediaDrm.getPropertyString("hdcpLevel"));
            addPair("Max HDCP Level:", mediaDrm.getPropertyString("maxHdcpLevel"));
            addPair("Usage Reporting Support:", mediaDrm.getPropertyString("usageReportingSupport"));
            addPair("Max Sessions:", mediaDrm.getPropertyString("maxNumberOfSessions"));
            addPair("Max Open Sessions:", mediaDrm.getPropertyString("numberOfOpenSessions"));

            mediaDrm.release();
        } catch (UnsupportedSchemeException e) {
            e.printStackTrace();
        }
    }

}