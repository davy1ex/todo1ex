<?php
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
$pass2 = filter_var(trim($_POST['password2']), FILTER_SANITIZE_STRING);

if (mb_strlen($login) < 6 || mb_strlen($login) > 90) {
    echo 'bad login';
    exit();
}

else if (mb_strlen($pass) < 8 || mb_strlen($pass) > 50) {
    echo 'bad pass';
    exit();
}

else if ($pass != $pass2) {
    echo 'differents pass';
    exit();
}

$pass = md5($pass."32i4j23ui4h");


$mysql = new mysqli('localhost', 'root', '1', 'users');
$mysql -> query("INSERT INTO `users` (`login`, `password`, `name`)
    VALUES ('$login', '$pass', '$login')
");

$mysql -> close();
header('Location: /');