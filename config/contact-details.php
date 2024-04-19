<?php

    return [
        'users' => [
            'xavier' => [
                'name' => "Xavier Myburgh",
                'email' => env('CONTACT_XAVIER_EMAIL', 'xavier@eloquentblinds.co.za'),
                'password' => env('CONTACT_XAVIER_PASSWORD', 'password'),
                'phone' => env('CONTACT_XAVIER_PHONE'),
            ],
            'claude' => [
                'name' => "Claude Myburgh",
                'email' => env('CONTACT_CLAUDE_EMAIL', 'claude@eloquentblinds.co.za'),
                'password' => env('CONTACT_CLAUDE_PASSWORD', 'password'),
                'phone' => env('CONTACT_CLAUDE_PHONE'),
            ],

        ]
    ];
