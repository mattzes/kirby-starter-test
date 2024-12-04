<?php

Kirby::plugin('mattzes/word-count', [
    'pageMethods' => [
        'wordCount' => function ($field) {
            $text = $this->$field()->value();
            return str_word_count(strip_tags($text));
        }
    ]
]);