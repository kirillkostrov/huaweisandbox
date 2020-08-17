package com.huawei.kkstudy.LabActivities;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.common.ApiException;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import com.huawei.hms.support.hwid.service.HuaweiIdAuthService;
import com.huawei.kkstudy.R;

public class AuthKitActivity extends AppCompatActivity {

    public static final String TAG = "KKStudyHuaweiIdActivity";

    public static final int REQUEST_SIGN_IN_LOGIN = 1002;

    private HuaweiIdAuthService mAuthService;
    private HuaweiIdAuthParams mAuthParams;
    private EditText mEditText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_auth);

        mEditText = findViewById(R.id.output);

        mAuthParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM)
                .setIdToken()
                .setAccessToken()
                .createParams();

        mAuthService = HuaweiIdAuthManager.getService(AuthKitActivity.this, mAuthParams);
    }

    public void IdAuthClick(View v) {
        tokenSignIn();
    }

    public void SignOutClick(View v) {
        signOut();
    }

    public void SilentSignInClick(View v) {
        silentSignIn();
    }

    private void silentSignIn() {
        Task<AuthHuaweiId> silentSignInTask = mAuthService.silentSignIn();
        silentSignInTask.addOnSuccessListener(new OnSuccessListener<AuthHuaweiId>() {
            @Override
            public void onSuccess(AuthHuaweiId authHuaweiId) {
                Log.i(TAG, getString(R.string.silent_signin_result_success_text));
                AddTextToLog(getString(R.string.silent_signin_result_success_text));
            }

        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                if (e instanceof ApiException) {
                    Log.i(TAG, getString(R.string.trying_token_signin_after_silent_signin_failed));
                    AddTextToLog(getString(R.string.trying_token_signin_after_silent_signin_failed));
                }
            }
        });
    }

    private void tokenSignIn() {
        Intent huaweiSignInForm = mAuthService.getSignInIntent();
        startActivityForResult(huaweiSignInForm, REQUEST_SIGN_IN_LOGIN);
    }

    private void signOut() {
        Task<Void> signOutTask = mAuthService.signOut();
        signOutTask
                .addOnSuccessListener(new OnSuccessListener<Void>() {
                    @Override
                    public void onSuccess(Void aVoid) {
                        Log.i(TAG, getString(R.string.sign_out_success));
                        AddTextToLog(getString(R.string.sign_out_success));
                    }
                })
                .addOnFailureListener(new OnFailureListener() {
                    @Override
                    public void onFailure(Exception e) {
                        Log.i(TAG, getString(R.string.sign_out_failed));
                        AddTextToLog(getString(R.string.sign_out_failed));

                    }
                });
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == REQUEST_SIGN_IN_LOGIN) {
            Task<AuthHuaweiId> authHuaweiIdTask = HuaweiIdAuthManager.parseAuthResultFromIntent(data);
            if (authHuaweiIdTask.isSuccessful()) {
                AuthHuaweiId huaweiAccount = authHuaweiIdTask.getResult();
                Log.i(TAG, getString(R.string.sign_in_success) + ": " + huaweiAccount.getDisplayName());
                AddTextToLog(getString(R.string.sign_in_success) + ": " + huaweiAccount.getDisplayName());
            } else {
                Log.i(TAG, "signIn failed: " + ((ApiException) authHuaweiIdTask.getException()).getStatusCode());
            }
        }
    }

    private void AddTextToLog(String text) {
        mEditText.setText(mEditText.getText() + System.getProperty("line.separator") + text);
    }

}