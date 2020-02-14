package com.pg_handle_url;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PGNavigationModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;
    private static String TAG_MSG = "PGNavigationModule";
    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            super.onActivityResult(activity, requestCode, resultCode, data);

            Log.d(TAG_MSG, requestCode + "-" + resultCode + "--" +  data.getStringExtra("OPEN_SCREEN"));
            EventEmitterModule.emitEvent( data.getStringExtra("OPEN_SCREEN"));

        }
    };

    PGNavigationModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @NonNull
    @Override
    public String getName() {
        return "PGNavigation";
    }

    @ReactMethod
    public void navigate(String name) {
        Log.d(TAG_MSG, name);
        Intent intent = new Intent(reactContext, PaymentActivity.class);
        reactContext.startActivityForResult(intent, 123, null);
    }


}
