<?php
$task = $_POST['task'];

if ($task == '') {
    echo 'Try again';
    exit();
}
require 'configDB.php';

$sql = 'INSERT INTO task(title) VALUES(:task)';
$query = $pdo -> prepare($sql);
$query -> execute(['task' => $task]);

header('Location: /example.php');