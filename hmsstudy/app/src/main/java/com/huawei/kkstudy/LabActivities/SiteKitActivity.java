package com.huawei.kkstudy.LabActivities;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.site.api.SearchResultListener;
import com.huawei.hms.site.api.SearchService;
import com.huawei.hms.site.api.SearchServiceFactory;
import com.huawei.hms.site.api.model.AddressDetail;
import com.huawei.hms.site.api.model.HwLocationType;
import com.huawei.hms.site.api.model.SearchStatus;
import com.huawei.hms.site.api.model.Site;
import com.huawei.hms.site.api.model.TextSearchRequest;
import com.huawei.hms.site.api.model.TextSearchResponse;
import com.huawei.kkstudy.R;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

public class SiteKitActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity";

    private SearchService searchService;
    TextView resultTextView;
    EditText queryInput;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_site_kit);

        try {
            String api_key = AGConnectServicesConfig.fromContext(this).getString("client/api_key");
            searchService = SearchServiceFactory.create(this, URLEncoder.encode(api_key, "utf-8"));
        } catch (UnsupportedEncodingException e) {
            Log.e(TAG, "encode apikey error");
        }

        queryInput = findViewById(R.id.edit_text_text_search_query);
        resultTextView = findViewById(R.id.response_text_search);
    }

    public void search(View view) {
        TextSearchRequest textSearchRequest = new TextSearchRequest();
        textSearchRequest.setQuery(queryInput.getText().toString());
        textSearchRequest.setHwPoiType(HwLocationType.TOWER);
        searchService.textSearch(textSearchRequest, new SearchResultListener<TextSearchResponse>() {
            @Override
            public void onSearchResult(TextSearchResponse textSearchResponse) {

                StringBuilder response = new StringBuilder("\n");
                response.append("success\n");
                int count = 1;
                AddressDetail addressDetail;
                for (Site site : textSearchResponse.getSites()) {
                    addressDetail = site.getAddress();
                    response.append(String.format(
                            "[%s]  name: %s, formatAddress: %s, country: %s, countryCode: %s \r\n",
                            "" + (count++), site.getName(), site.getFormatAddress(),
                            (addressDetail == null ? "" : addressDetail.getCountry()),
                            (addressDetail == null ? "" : addressDetail.getCountryCode())));
                }
                Log.d(TAG, "search result is : " + response);
                resultTextView.setText(response.toString());
            }

            @Override
            public void onSearchError(SearchStatus searchStatus) {
                Log.e(TAG, "onSearchError is: " + searchStatus.getErrorCode());
            }
        });
    }

}