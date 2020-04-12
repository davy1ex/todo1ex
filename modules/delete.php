<?php
include 'configDB.php';
$id = $_GET['id'];

$sql = 'DELETE FROM `task` WHERE `id`= ?';
$query = $pdo -> prepare($sql);
$query -> execute([$id]);
header('Location: /all.php');
