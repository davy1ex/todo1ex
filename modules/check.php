<?php
require('userDB.php');

$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
$pass = md5($pass."32i4j23ui4h");

$query = $pdo->prepare("SELECT * FROM users WHERE login = ?");
$query -> execute([$login]);
$user = $query->fetch();

if($user['login'] and $pass == $user['password']) {
    echo "ok";
}

else {
    echo 'Not found';
}

setcookie('user', $user['name'], time()+3600*24);
$data['cookie'] = $_COOKIE['user'];

$con = null;
// // $data['cookie'] = $_COOKIE['user'];
header('Location: /');