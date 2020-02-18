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
        Button btnGoToList;
        Button btnGoToDash;
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native);

        btnGoToList = findViewById(R.id.btnGoToList);
        btnGoToDash = findViewById(R.id.btnGoToDash);


        btnGoToList.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent a = new Intent(PaymentActivity.this, MainActivity2.class);
                startActivity(a);
            }
        });

        btnGoToDash.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent a = new Intent(PaymentActivity.this, Dashboard.class);
                startActivity(a);
            }
        });

    }


}
