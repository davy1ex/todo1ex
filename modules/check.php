<?php
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);

$pass = md5($pass."32i4j23ui4h");


$mysql = new mysqli('localhost', 'root', '1', 'users');
$result = $mysql -> query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$pass' ");
$user = $result -> fetch_assoc();

if(count($user) == 0) {
    echo "not found";
    exit();
}

setcookie('user', $user['name'], time()+3600*24, "/");

$mysql -> close();
// $data['cookie'] = $_COOKIE['user'];
header('Location: /');