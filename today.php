<?php



require('./modules/twig.php');
require('./modules/taskDB.php');
$name_list = "Today";
$query = $pdo -> prepare('SELECT * FROM `task` ORDER BY `id` DESC');
$query -> execute();

$rows = $query -> fetchAll();


// echo $twig->render('example.html.twig', ['rows' => $rows]);
echo $twig -> render('base.html.twig', ['rows' => $rows, 'name_list' => $name_list]);