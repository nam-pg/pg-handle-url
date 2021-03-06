package com.pg_handle_url;

import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

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

    @ReactMethod
    public void navigate(String name) {
        Log.d(TAG_MSG, name);
        Intent intent;
        switch (name) {
            case "Payment":
                intent = new Intent(reactContext, PaymentActivity.class);
                break;
            case "Dashboard":
                intent = new Intent(reactContext, Dashboard.class);
                break;
            default:
                intent = new Intent(reactContext, MainActivity2.class);
               break;
        }

        reactContext.startActivityForResult(intent, 123, null);
    }


}
