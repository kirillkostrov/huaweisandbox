package com.sample.huawei.nearby;

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
import com.sample.huawei.nearby.model.MessageItem;
import com.sample.huawei.nearby.utils.JsonUtils;

import java.nio.charset.StandardCharsets;

public class MessageEngineActivity extends AppCompatActivity {

    private static final String TAG = "MessageEngineActivity";

    private static final String DEFAULT_NAMESPACE = "com.huawei.nearby.example";
    private static final String DEFAULT_TYPE = "message";

    private Message publishedMessage;

    private MessageItem messageItem;

    private SearchMessageDialogFragment searchMessageDialogFragment;

    private MessageHandler mMessageHandler = new MessageHandler() {
        @Override
        public void onFound(Message message) {
            MessageItem foundMessage = JsonUtils.json2Object(new String(message.getContent(), StandardCharsets.UTF_8),
                    MessageItem.class);
            if (foundMessage == null) {
                return;
            }
            searchMessageDialogFragment.addItem(foundMessage);
            Toast.makeText(getApplicationContext(), "Message found: " + foundMessage.getTitle(), Toast.LENGTH_LONG).show();
        }

        @Override
        public void onLost(Message message) {
            MessageItem foundMessage = JsonUtils.json2Object(new String(message.getContent(), StandardCharsets.UTF_8),
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

        searchMessageDialogFragment = new SearchMessageDialogFragment();
    }

    public void publishItemClick(View view) {

        NewMessageDialogFragment newMessageDialogFragment = new NewMessageDialogFragment((title, content, unpublishOld) -> {
            if (unpublishOld) {
                unpublish(result -> {
                    publish(new MessageItem(title, content));
                });
            } else {
                publish(new MessageItem(title, content));
            }
        });

        newMessageDialogFragment.show(getSupportFragmentManager(), "new message");
    }

    public void subscribeItemClick(View view) {
        subscribe(result -> {
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
            Toast.makeText(this, "Subscribed successfully.", Toast.LENGTH_LONG).show();
        }, null);
    }

    private void publish(MessageItem messageItem) {
        publishedMessage = new Message(JsonUtils.object2Json(messageItem).getBytes(StandardCharsets.UTF_8), DEFAULT_TYPE, DEFAULT_NAMESPACE);

        Policy policy = new Policy.Builder().setTtlSeconds(Policy.POLICY_TTL_SECONDS_MAX).build();
        PutOption option = new PutOption.Builder().setPolicy(policy).build();
        Nearby.getMessageEngine(this).put(publishedMessage, option).addOnCompleteListener(result -> {
            if (result.isSuccessful()) {
                Toast.makeText(this, "Message published successfully.", Toast.LENGTH_LONG).show();
                return;
            }
            String str = "Failed to publish message, exception: " + result.getException().getMessage();
            Log.e(TAG, str);
            Toast.makeText(this, str, Toast.LENGTH_LONG).show();
        });
    }

    private void subscribe(OnCompleteListener<Void> listener, GetCallback callback) {
        Policy policy = new Policy.Builder().setTtlSeconds(Policy.POLICY_TTL_SECONDS_INFINITE).build();
        MessagePicker picker = new MessagePicker.Builder().includeNamespaceType(DEFAULT_NAMESPACE, DEFAULT_TYPE).build();
        GetOption.Builder builder = new GetOption.Builder().setPolicy(policy).setPicker(picker);
        if (callback != null) {
            builder.setCallback(callback);
        }
        Nearby.getMessageEngine(this).get(mMessageHandler, builder.build()).addOnCompleteListener(listener);
    }

    private void unpublish(OnCompleteListener<Void> listener) {
        if (publishedMessage == null) return;
        Nearby.getMessageEngine(this).unput(publishedMessage)
                .addOnCompleteListener(listener);
    }

    private void unsubscribe(OnCompleteListener<Void> listener) {
        Nearby.getMessageEngine(this).unget(mMessageHandler).addOnCompleteListener(listener);
    }
}