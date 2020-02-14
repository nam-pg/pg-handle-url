package com.pg_handle_url;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class PaymentActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Button btnGoback;
        Button btnGobackToWebScreen;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native);

        btnGoback = findViewById(R.id.btnGoBack);
        btnGobackToWebScreen = findViewById(R.id.btnGobackWebScreen);

        btnGoback.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.putExtra("OPEN_SCREEN", "HOME");
                setResult(Activity.RESULT_OK, intent);
                finish();
            }
        });

        btnGobackToWebScreen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.putExtra("OPEN_SCREEN", "WEB");
                setResult(Activity.RESULT_OK, intent);
                finish();
            }
        });

    }


}
