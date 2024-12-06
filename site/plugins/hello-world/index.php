<?php

Kirby::plugin('mattzes/hello-world-1', [
    'fields' => [
        'hello' => [
            'props' => [
                'label' => function (string $label = 'Hello World') {
                    return $label;
                },
            ],
            'computed' => [
                'message' => function () {
                    return 'Hello, ' . $this->label;
                }
            ],
        ],
    ],
]);
