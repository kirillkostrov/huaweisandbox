package com.huawei.kkostrov.nearby;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.huawei.hmf.tasks.OnCompleteListener;
import com.huawei.hms.nearby.Nearby;
import com.huawei.hms.nearby.message.GetCallback;
import com.huawei.hms.nearby.message.GetOption;
import com.huawei.hms.nearby.message.Message;
import com.huawei.hms.nearby.message.MessageHandler;
import com.huawei.hms.nearby.message.MessagePicker;
import com.huawei.hms.nearby.message.Policy;
import com.huawei.hms.nearby.message.PutOption;
import com.huawei.kkostrov.nearby.model.MessageItem;
import com.huawei.kkostrov.nearby.utils.JsonUtils;

import java.nio.charset.Charset;

public class MessageEngineActivity extends AppCompatActivity {

    private static final String TAG = "MessageEngineActivity";

    private static final String DEFAULT_NAMESPACE = "com.huawei.nearby.example";
    private static final String DEFAULT_TYPE = "message";

    private static final int UNPUBLISH_STATUS = 0;
    private static final int PUBLISH_STATUS = 1;

    private int status = UNPUBLISH_STATUS;

    private MessageItem messageItem;

    private SearchMessageDialogFragment searchMessageDialogFragment;

    private MessageHandler mMessageHandler = new MessageHandler() {
        @Override
        public void onFound(Message message) {

            MessageItem foundMessage = JsonUtils.json2Object(new String(message.getContent(), Charset.forName("UTF-8")),
                    MessageItem.class);

            if (foundMessage == null) {
                return;
            }

            searchMessageDialogFragment.addItem(foundMessage);
            Toast.makeText(getApplicationContext(), "Message found: " + foundMessage.getTitle(), Toast.LENGTH_LONG).show();
        }

        @Override
        public void onLost(Message message) {
            MessageItem foundMessage = JsonUtils.json2Object(new String(message.getContent(), Charset.forName("UTF-8")),
                    MessageItem.class);

            if (foundMessage == null) {
                return;
            }

            searchMessageDialogFragment.removeItem(foundMessage);
            Toast.makeText(getApplicationContext(), "Message lost: " + foundMessage.getTitle(), Toast.LENGTH_LONG).show();
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message_engine);

        messageItem = new MessageItem("Title", "Message Content");
        searchMessageDialogFragment = new SearchMessageDialogFragment();
    }

    public void publishItemClick(View view) {
        publish(DEFAULT_NAMESPACE, DEFAULT_TYPE, Policy.POLICY_TTL_SECONDS_MAX, result -> {
            if (result.isSuccessful()) {
                status = PUBLISH_STATUS;
                Toast.makeText(this, "Message published successfuly.", Toast.LENGTH_LONG).show();
                return;
            }

            String str = "Failed to publish message, exception: " + result.getException().getMessage();
            Log.e(TAG, str);
            Toast.makeText(this, str, Toast.LENGTH_LONG).show();
        });
    }

    public void subscribeItemClick(View view) {
        subscribe(DEFAULT_NAMESPACE, DEFAULT_TYPE, Policy.POLICY_TTL_SECONDS_INFINITE, result -> {
            if (!result.isSuccessful()) {
                String str = "Subscribe failed, exception: " + result.getException().getMessage();
                Log.e(TAG, str);
                Toast.makeText(this, str, Toast.LENGTH_LONG).show();
                return;
            }
            searchMessageDialogFragment.setOnCloseListener(() -> {
                unsubscribe(task -> {
                    if (!task.isSuccessful()) {
                        Toast.makeText(this, "Unsubscribe failed, exception: "
                                + task.getException().getMessage(), Toast.LENGTH_LONG).show();
                    }
                });
            });
            searchMessageDialogFragment.show(getSupportFragmentManager(), "Search Message");
            Toast.makeText(this, "Subscribe is successful.", Toast.LENGTH_LONG).show();
        }, null);
    }

    private void publish(String namespace, String type, int ttlSeconds, OnCompleteListener<Void> listener) {
        Message message = new Message(JsonUtils.object2Json(messageItem).getBytes(Charset.forName("UTF-8")), type,
                namespace);
        Policy policy = new Policy.Builder().setTtlSeconds(ttlSeconds).build();
        PutOption option = new PutOption.Builder().setPolicy(policy).build();
        Nearby.getMessageEngine(this).put(message, option).addOnCompleteListener(listener);
    }

    private void subscribe(String namespace, String type, int ttlSeconds, OnCompleteListener<Void> listener,
                           GetCallback callback) {
        Policy policy = new Policy.Builder().setTtlSeconds(ttlSeconds).build();
        MessagePicker picker = new MessagePicker.Builder().includeNamespaceType(namespace, type).build();
        GetOption.Builder builder = new GetOption.Builder().setPolicy(policy).setPicker(picker);
        if (callback != null) {
            builder.setCallback(callback);
        }
        Nearby.getMessageEngine(this).get(mMessageHandler, builder.build()).addOnCompleteListener(listener);
    }

    private void unpublish(String namespace, String type, OnCompleteListener<Void> listener) {
        Message message = new Message(JsonUtils.object2Json(messageItem).getBytes(Charset.forName("UTF-8")), type,
                namespace);
        Nearby.getMessageEngine(this).unput(message)
                .addOnCompleteListener(listener);
    }

    private void unsubscribe(OnCompleteListener<Void> listener) {
        Nearby.getMessageEngine(this).unget(mMessageHandler).addOnCompleteListener(listener);
    }
}