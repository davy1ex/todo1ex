<?php
$con = mysqli_connect("localhost", "mysql", "mysql", "todolist");


if (!$con) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

$tasks_query = "select * FROM `task`";
$tasks = mysqli_query($con, $tasks_query);
// $line = mysqli_fetch_assoc($tasks);
// print_r($line);

while (($line = mysqli_fetch_assoc($tasks))) {
    
    echo $line['title'] . "<hr>";
}

echo "Соединение с MySQL установлено!" . PHP_EOL;
mysqli_close($tasks);
?>