package com.pg_handle_url;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class PGNavigationModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;
    private static String TAG_MSG = "PGNavigationModule";

    PGNavigationModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "PGNavigation";
    }

    public void navigate(String name) {
        Log.d(TAG_MSG, name);
    }
}
