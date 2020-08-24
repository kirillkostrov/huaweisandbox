package com.huawei.kkstudy;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.common.ApiException;
import com.huawei.hms.common.api.CommonStatusCodes;
import com.huawei.hms.support.api.entity.core.CommonCode;
import com.huawei.hms.support.api.entity.safetydetect.MaliciousAppsData;
import com.huawei.hms.support.api.entity.safetydetect.MaliciousAppsListResp;
import com.huawei.hms.support.api.entity.safetydetect.SysIntegrityResp;
import com.huawei.hms.support.api.entity.safetydetect.UrlCheckResponse;
import com.huawei.hms.support.api.entity.safetydetect.WifiDetectResponse;
import com.huawei.hms.support.api.safetydetect.SafetyDetect;
import com.huawei.hms.support.api.safetydetect.SafetyDetectClient;
import com.huawei.hms.support.api.safetydetect.SafetyDetectStatusCodes;
import com.huawei.kkstudy.LabActivities.DisplayResultActivity;


import java.util.List;

import static java.nio.charset.StandardCharsets.UTF_8;

public class SafetyKitActivity extends AppCompatActivity {

    private static final String TAG = "KKSafetyKit";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_safety_kit);
    }

    public void CheckIntegrityClick(View view) {
        invokeSysIntegrity();
    }

    private void openResultActivity(String result) {
        Intent resultWindow = new Intent(this, DisplayResultActivity.class);
        resultWindow.putExtra(DisplayResultActivity.DATA_KEY, result);
        startActivity(resultWindow);
    }



    private void invokeSysIntegrity() {
        SafetyDetectClient mClient = SafetyDetect.getClient(SafetyKitActivity.this);
        // TODO(developer): Change the nonce generation to include your own, used once value,
        // ideally from your remote server.
        byte[] nonce = ("Sample" + System.currentTimeMillis()).getBytes();
        Task task = mClient.sysIntegrity(nonce,"102724729");
        task.addOnSuccessListener(new OnSuccessListener<SysIntegrityResp>() {
            @Override
            public void onSuccess(SysIntegrityResp response) {
                // Indicates communication with the service was successful.
                // Use response.getResult() to get the result data.
                String jwsStr = response.getResult();

                makeToast("Integrity check successful, check logs.");

                Log.d(TAG, "jwsString: " + jwsStr);

                byte[] data = initialDataExtractionWithoutSignature(jwsStr);
                String textResult = new String(data, UTF_8);

                openResultActivity(textResult);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                // An error occurred while communicating with the service.
                if (e instanceof ApiException) {
                    // An error with the HMS API contains some
                    // additional details.
                    ApiException apiException = (ApiException) e;
                    // You can retrieve the status code using
                    // the apiException.getStatusCode() method.
                    Log.e(TAG, "Error: " + SafetyDetectStatusCodes.getStatusCodeString(apiException.getStatusCode()) + ": " + apiException.getMessage());
                } else {
                    // A different, unknown type of error occurred.
                    Log.e(TAG, "ERROR:" + e.getMessage());
                }
                makeToast("Integrity check failed, check logs.");
            }
        });
    }

    private byte[] initialDataExtractionWithoutSignature(final String jwsResult) {

        final String[] jwsResultParts = jwsResult.split("[.]");
        if (jwsResultParts.length == 3) {
            final byte[] header = Base64.decode(jwsResultParts[0], Base64.NO_WRAP);
            final byte[] data = Base64.decode(jwsResultParts[1], Base64.NO_WRAP);
            //final byte[] signature = Base64.decode(jwsResultParts[2], Base64.NO_WRAP);

            Log.d(TAG, "initialDataExtraction: header = " + new String(header, UTF_8));
            Log.d(TAG, "initialDataExtraction: data = " + new String(data, UTF_8));
            //Log.d(TAG, "initialDataExtraction: signature = " + new String(signature, UTF_8));

            return data;
        } else {
            Log.e(TAG, "initialDataExtraction: Failure: Illegal JWS signature format. The JWS consists of " + jwsResultParts.length + " parts instead of 3.");
            return null;
        }
    }

    public void CheckAppsButtonClick(View view) {
        invokeGetMaliciousApps();
    }

    private void invokeGetMaliciousApps() {
        SafetyDetectClient appsCheckClient = SafetyDetect.getClient(SafetyKitActivity.this);
        Task task = appsCheckClient.getMaliciousAppsList();
        task.addOnSuccessListener(new OnSuccessListener<MaliciousAppsListResp>() {
            @Override
            public void onSuccess(MaliciousAppsListResp maliciousAppsListResp) {
                // Indicates communication with the service was successful.
                // Use resp.getMaliciousApps() to get malicious apps data.
                List<MaliciousAppsData> appsDataList = maliciousAppsListResp.getMaliciousAppsList();
                // Indicates get malicious apps was successful.
                if (maliciousAppsListResp.getRtnCode() == CommonCode.OK) {
                    if (appsDataList.isEmpty()) {
                        // Indicates there are no known malicious apps.
                        Log.i(TAG, "There are no known potentially malicious apps installed.");
                        makeToast("There are no known potentially malicious apps installed.");

                    } else {
                        makeToast("Potentially malicious apps are installed! Check log for details.");
                        Log.i(TAG, "Potentially malicious apps are installed!");
                        for (MaliciousAppsData maliciousApp : appsDataList) {
                            Log.i(TAG, "Information about a malicious app:");
                            // Use getApkPackageName() to get APK name of malicious app.
                            Log.i(TAG, "APK: " + maliciousApp.getApkPackageName());
                            // Use getApkSha256() to get APK sha256 of malicious app.
                            Log.i(TAG, "SHA-256: " + maliciousApp.getApkSha256());
                            // Use getApkCategory() to get category of malicious app.
                            // Categories are defined in AppsCheckConstants
                            Log.i(TAG, "Category: " + maliciousApp.getApkCategory());
                        }
                    }
                } else {
                    Log.e(TAG, "getMaliciousAppsList fialed: " + maliciousAppsListResp.getErrorReason());
                    makeToast("getMaliciousAppsList fialed.");
                }
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                // An error occurred while communicating with the service.
                if (e instanceof ApiException) {
                    // An error with the HMS API contains some
                    // additional details.
                    ApiException apiException = (ApiException) e;
                    // You can retrieve the status code using the apiException.getStatusCode() method.
                    Log.e(TAG, "Error: " + SafetyDetectStatusCodes.getStatusCodeString(apiException.getStatusCode()) + ": " + apiException.getStatusMessage());
                } else {
                    // A different, unknown type of error occurred.
                    Log.e(TAG, "ERROR: " + e.getMessage());
                }
            }
        });
    }

    public void CheckUrlClick(View view) {

        String url = ((EditText)findViewById(R.id.urlToCheck)).getText().toString();
        SafetyDetect.getClient(this).urlCheck(url, "102724729", UrlCheckerThreat.MALWARE, UrlCheckerThreat.PHISHING)
                .addOnSuccessListener(this, new OnSuccessListener<UrlCheckResponse>() {
                    @Override
                    public void onSuccess(UrlCheckResponse urlResponse) {
                        // Indicates that the communication with the service is successful and the detected threat is identified.[c(1]
                        if (urlResponse.getUrlCheckResponse().isEmpty()) {
                            // No threat exists.1
                            makeToast("No Threat");
                        } else {
                            // Threats exist.
                            makeToast("Threat exist");
                        }
                    }
                })
                .addOnFailureListener(this, new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        makeToast("Something went wrong, check log for details.");

                        // An error occurs during communication with the service.
                        if (e instanceof ApiException) {
                            // Huawei Mobile Services (APK) error code and corresponding error description.
                            ApiException apiException = (ApiException) e;
                            Log.d(TAG, "Error: " + CommonStatusCodes
                                    .getStatusCodeString(apiException.getStatusCode()));
                            // Note: If the status code is SafetyDetectStatusCode.ERROR_URL_CHECKER_API_NOT_INITIALIZED,
                            // you do not call the initUrlChecker() method or you have initiated a URL check request before the call is completed.
                            // If an internal error occurs during the initialization, you need to call the initUrlChecker() method again to initialize the API.
                        } else {
                            // An unknown exception occurs.
                            Log.d(TAG, "Error: " + e.getMessage());
                        }
                    }
                });

    }

    public void CheckWifiClick(View view) {
        Log.i(TAG, "Start to getWifiDetectStatus!");
        SafetyDetectClient wifidetectClient = SafetyDetect.getClient(getApplicationContext());
        Task task = wifidetectClient.getWifiDetectStatus();
        task.addOnSuccessListener(new OnSuccessListener<WifiDetectResponse>() {
            @Override
            public void onSuccess(WifiDetectResponse wifiDetectResponse) {
                int wifiDetectStatus = wifiDetectResponse.getWifiDetectStatus();
                Log.i(TAG, "\n-1: Failed to obtain the Wi-Fi status. \n" + "0: No Wi-Fi is connected. \n" + "1: The connected Wi-Fi is secure. \n" + "2: The connected Wi-Fi is insecure.");
                Log.i(TAG, "wifiDetectStatus is: " + wifiDetectStatus);
                switch (wifiDetectStatus) {
                    case -1:
                        makeToast("Failed to obtain the Wi-Fi status.");
                        break;
                    case 0:
                        makeToast("No Wi-Fi is connected.");
                        break;
                    case 1:
                        makeToast("The connected Wi-Fi is secure.");
                        break;
                    case 2:
                        makeToast("The connected Wi-Fi is insecure.");
                        break;
                    default:
                        makeToast("Unknown result");
                }
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                makeToast("Error occurred, please check logs.");
                if (e instanceof ApiException) {
                    ApiException apiException = (ApiException) e;
                    Log.e(TAG,
                            "Error: " + apiException.getStatusCode() + ":"
                                    + SafetyDetectStatusCodes.getStatusCodeString(apiException.getStatusCode()) + ": "
                                    + apiException.getStatusMessage());
                } else {
                    Log.e(TAG, "ERROR! " + e.getMessage());
                }
            }
        });
    }

    public class UrlCheckerThreat {

        public static final int MALWARE = 1;

        public static final int PHISHING = 3;
    }

    private void makeToast(String text) {
        Toast toast = Toast.makeText(getApplicationContext(), text, Toast.LENGTH_LONG);
        toast.show();
    }
}