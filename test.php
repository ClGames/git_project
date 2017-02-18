<?php
    
    echo "Hello World!";

    $hn = 'http://clgames.pe.hu';
    $db = 'u784673623_1';
    $un = 'u784673623_1';
    $pw = '111111';

    $conn = new mysqli($hn, $un, $pw, $db);
    if ($conn->connect_error) die($conn->connect_error);
?>