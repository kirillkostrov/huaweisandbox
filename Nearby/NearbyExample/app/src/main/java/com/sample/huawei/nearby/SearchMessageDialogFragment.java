package com.sample.huawei.nearby;

import android.app.AlertDialog;
import android.app.Dialog;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Toast;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.sample.huawei.nearby.model.MessageItem;

import java.util.HashMap;

public class SearchMessageDialogFragment extends DialogFragment implements MessageRecyclerViewAdapter.OnItemClickListener {

    private MessageRecyclerViewAdapter adapter;
    private HashMap<String, MessageItem> items = new HashMap<>();
    private OnCloseListener onCloseListener;

    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        LayoutInflater inflater = getActivity().getLayoutInflater();
        View view = inflater.inflate(R.layout.discover_message_dialog, null);

        RecyclerView rv = view.findViewById(R.id.recycler_view);
        rv.setLayoutManager(new LinearLayoutManager(getActivity()));
        adapter = new MessageRecyclerViewAdapter(this);
        rv.setAdapter(adapter);
        AlertDialog.Builder builder = new AlertDialog.Builder(getActivity())
                .setView(view)
                .setCancelable(false)
                .setPositiveButton("Ok", (dialog, which) -> {
                    //TODO: On OK
                    onCloseListener.onClose();
                })
                .setNegativeButton("Cancel", (dialog, which) -> {
                    //TODO: On Cancel
                    onCloseListener.onClose();
                });
        AlertDialog dialog = builder.create();
        dialog.setCanceledOnTouchOutside(false);
        return dialog;
    }

    @Override
    public void onItemClick(String name) {
        if (!items.containsKey(name)) return;
        String content = items.get(name).getContent();
        Toast.makeText(getContext(), "Content:" + content, Toast.LENGTH_LONG).show();
    }

    public void addItem(MessageItem message) {
        if (items.containsKey(message.getTitle())) {
            return;
        }
        adapter.addName(message.getTitle());
        items.put(message.getTitle(), message);
    }

    public void removeItem(MessageItem message) {
        items.remove(message.getTitle());
        adapter.removeName(message.getTitle());
    }

    public void setOnCloseListener(OnCloseListener listener) {
        onCloseListener = listener;
    }

    public interface OnCloseListener {
        void onClose();
    }
}
