package com.huawei.kkstudy.LabActivities;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.identity.Address;
import com.huawei.hms.identity.entity.GetUserAddressResult;
import com.huawei.hms.identity.entity.UserAddress;
import com.huawei.hms.identity.entity.UserAddressRequest;
import com.huawei.hms.support.api.client.Status;
import com.huawei.kkstudy.R;

public class IdentityKitActivity extends AppCompatActivity {

    private static final String TAG = "IdentityLabDemo";

    private static final int GET_ADDRESS = 1;

    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_identity_kit);
        
        textView = findViewById(R.id.identity_result);
    }

    public void getAddress(View view) {
        UserAddressRequest req = new UserAddressRequest();
        Task<GetUserAddressResult> task = Address.getAddressClient(this).getUserAddress(req);
        task.addOnSuccessListener(new OnSuccessListener<GetUserAddressResult>() {
            @Override
            public void onSuccess(GetUserAddressResult result) {
                Log.i(TAG, "onSuccess result code:" + result.getReturnCode());
                try {
                    startActivityForResult(result);
                } catch (IntentSender.SendIntentException e) {
                    e.printStackTrace();
                }
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                Log.i(TAG, "on Failed result code:" + e.getMessage());
            }
        });
    }

    private void startActivityForResult(GetUserAddressResult result) throws IntentSender.SendIntentException {
        Status status = result.getStatus();
        if (result.getReturnCode() == 0 && status.hasResolution()) {
            Log.i(TAG, "the result had resolution.");
            status.startResolutionForResult(this, GET_ADDRESS);
        } else {
            Log.i(TAG, "the response is wrong, the return code is " + result.getReturnCode());
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.i(TAG, "onActivityResult requestCode " + requestCode + " resultCode " + resultCode);
        switch (requestCode) {
            case GET_ADDRESS:
                switch (resultCode) {
                    case Activity.RESULT_OK:
                        UserAddress userAddress = UserAddress.parseIntent(data);
                        if (userAddress != null) {
                            StringBuilder sb = new StringBuilder();
                            sb.append("name:" + userAddress.getName() + ",");
                            sb.append("city:" + userAddress.getAdministrativeArea() + ",");
                            sb.append("area:" + userAddress.getLocality() + ",");
                            sb.append("address:" + userAddress.getAddressLine1() + userAddress.getAddressLine2() + ",");
                            sb.append("phone:" + userAddress.getPhoneNumber());
                            Log.i(TAG, "user address is " + sb.toString());
                            textView.setText(sb.toString());
                        } else {
                            textView.setText("Failed to get user address.");
                        }
                        break;
                    case Activity.RESULT_CANCELED:
                        break;
                    default:
                        Log.i(TAG, "result is wrong, result code is " + resultCode);
                        break;
                }
            default:
                break;
        }
    }
}