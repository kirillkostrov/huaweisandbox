package com.huawei.kkstudy.game.huawei;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hmf.tasks.Task;
import com.huawei.hms.common.ApiException;
import com.huawei.hms.jos.JosApps;
import com.huawei.hms.jos.JosAppsClient;
import com.huawei.hms.jos.games.Games;
import com.huawei.hms.jos.games.PlayersClient;
import com.huawei.hms.jos.games.player.Player;
import com.huawei.hms.jos.games.player.PlayerExtraInfo;
import com.huawei.hms.support.hwid.HuaweiIdAuthManager;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParams;
import com.huawei.hms.support.hwid.request.HuaweiIdAuthParamsHelper;
import com.huawei.hms.support.hwid.result.AuthHuaweiId;
import com.huawei.hms.support.hwid.result.HuaweiIdAuthResult;
import com.huawei.hms.support.hwid.service.HuaweiIdAuthService;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.UUID;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private static final String TAG = "KKGame";

    private HuaweiIdAuthService mAuthService;
    private HuaweiIdAuthParams mAuthParams;

    private PlayersClient playersClient;
    private String playerID;
    private String sessionId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mAuthParams = new HuaweiIdAuthParamsHelper(HuaweiIdAuthParams.DEFAULT_AUTH_REQUEST_PARAM_GAME)
                .setIdToken()
                .createParams();

        mAuthService = HuaweiIdAuthManager.getService(MainActivity.this, mAuthParams);
    }

    public void InitClick(View view) {
        JosAppsClient appsClient = JosApps.getJosAppsClient(this);
        appsClient.init();
        Log.d(TAG, "init success");
    }

    public void SignInClick(View view) {
        Task<AuthHuaweiId> authHuaweiIdTask = mAuthService.silentSignIn();
        authHuaweiIdTask.addOnSuccessListener(new OnSuccessListener<AuthHuaweiId>() {
            @Override
            public void onSuccess(AuthHuaweiId authHuaweiId) {
                LogAndToast("silentsignIn success");
                Log.i(TAG, "display:" + authHuaweiId.getDisplayName());
                login();
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                if (e instanceof ApiException) {
                    ApiException apiException = (ApiException) e;
                    Log.i(TAG, "signIn failed:" + apiException.getStatusCode());
                    LogAndToast("start getSignInIntent");
                    //Sign in explicitly. The sign-in result is obtained in onActivityResult.

                    startActivityForResult(mAuthService.getSignInIntent(), 6013);
                }
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == 6013) {

            if (null == data) {
                LogAndToast("signIn inetnt is null");
                return;
            }
            String jsonSignInResult = data.getStringExtra("HUAWEIID_SIGNIN_RESULT");
            if (TextUtils.isEmpty(jsonSignInResult)) {
                LogAndToast("signIn result is empty");
                return;
            }
            try {
                HuaweiIdAuthResult signInResult = new HuaweiIdAuthResult().fromJson(jsonSignInResult);
                if (0 == signInResult.getStatus().getStatusCode()) {
                    LogAndToast("signIn success.");
                    Log.d(TAG, "signIn result: " + signInResult.toJson());
                } else {
                    LogAndToast("signIn failed: " + signInResult.getStatus().getStatusCode());
                }
            } catch (JSONException var7) {
                LogAndToast("Failed to convert json from signInResult.");
            }

        }
    }

    public void login() {
        playersClient = Games.getPlayersClient(this);
        Task<Player> playerTask = playersClient.getCurrentPlayer();

        //Task<Player> playerTask = playersClient.getGamePlayer();
        playerTask.addOnSuccessListener(new OnSuccessListener<Player>() {
            @Override
            public void onSuccess(Player player) {
                playerID = player.getPlayerId();
                Log.i(TAG, "getPlayerInfo Success, player info: " + playerID);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                //  Failed to obtain player information.
                if (e instanceof ApiException) {
                    Log.e(TAG, "getPlayerInfo failed, status: " + ((ApiException) e).getStatusCode());
                }
            }
        });
    }

    private void timeReportStart() {
        if (playersClient == null) {

            Log.i(TAG, "playersClient is null, please init  playersClient first");
            login();
            return;
        }
        if (playerID == null) {

            Log.i(TAG, "playerID is null, please getcurrentPlayer login first");
            login();
            return;
        }
        String uid = UUID.randomUUID().toString();
        Task<String> task = playersClient.submitPlayerEvent(playerID, uid, "GAMEBEGIN");
        task.addOnSuccessListener(new OnSuccessListener<String>() {
            @Override
            public void onSuccess(String jsonRequest) {
                try {
                    JSONObject data = new JSONObject(jsonRequest);
                    sessionId = data.getString("transactionId");
                } catch (JSONException e) {
                    LogAndToast("parse jsonArray meet json exception");
                    return;
                }
                LogAndToast("submitPlayerEvent traceId: " + jsonRequest);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                if (e instanceof ApiException) {
                    String result = "rtnCode:" + ((ApiException) e).getStatusCode();
                    LogAndToast(result);
                }
            }
        });

    }

    private void timeReportEnd() {

        if (playersClient == null) {

            Log.i(TAG, "playersClient is null, please init  playersClient first");
            login();
            return;
        }
        if (playerID == null) {

            Log.i(TAG, "playerID is null, please getcurrentPlayer login first");
            login();
            return;
        }
        if (sessionId == null) {

            Log.i(TAG, "sessionId is null, please submitPlayerEvent Begin  first");
            login();
            return;
        }


        Task<String> task = playersClient.submitPlayerEvent(playerID, sessionId, "GAMEEND");
        task.addOnSuccessListener(new OnSuccessListener<String>() {
            @Override
            public void onSuccess(String s) {
                LogAndToast("submitPlayerEvent traceId: " + s);
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                if (e instanceof ApiException) {
                    String result = "rtnCode:" + ((ApiException) e).getStatusCode();
                    LogAndToast(result);
                }
            }
        });
    }

    private void getPlayerExtra() {
        if (playersClient == null) {

            Log.i(TAG, "playersClient is null, please init  playersClient first");
            login();
            return;
        }
        if (sessionId == null) {

            Log.i(TAG, "sessionId is null, please submitPlayerEvent Begin  first");
            login();
            return;
        }
        Task<PlayerExtraInfo> task = playersClient.getPlayerExtraInfo(sessionId);
        task.addOnSuccessListener(new OnSuccessListener<PlayerExtraInfo>() {
            @Override
            public void onSuccess(PlayerExtraInfo extra) {
                if (extra != null) {
                    LogAndToast("IsRealName: " + extra.getIsRealName() + ", IsAdult: " + extra.getIsAdult()
                            + ", PlayerId: " + extra.getPlayerId() + ", PlayerDuration: " + extra.getPlayerDuration());
                } else {
                    LogAndToast("Player extra info is empty.");
                }
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(Exception e) {
                if (e instanceof ApiException) {
                    String result = "rtnCode:" + ((ApiException) e).getStatusCode();
                    LogAndToast(result);
                }
            }
        });

    }

    public void GetCurrentPlayerClick(View view) {
        login();
    }

    public void PlayerEventBegin(View view) {
        timeReportStart();
    }

    public void PlayerEventEnd(View view) {
        timeReportEnd();
    }

    public void PlayerExtraInfoClick(View view) {
        getPlayerExtra();
    }

    private void LogAndToast(String message) {
        Log.d(TAG, message);
        Toast toast = Toast.makeText(this, message, Toast.LENGTH_LONG);
        toast.show();
    }

    @Override
    public void onClick(View view) {
        LogAndToast("Someone invoked onClick, beehatch");
    }
}