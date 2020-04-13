<?php

require __DIR__ . '/vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$loader = new FilesystemLoader(__DIR__ . '/templates');
$twig = new Environment($loader);


require('modules/configDB.php');
$name_list = "All";
$query = $pdo -> prepare('SELECT * FROM `task` ORDER BY `id` DESC');
$query -> execute();

$rows = $query -> fetchAll();

$data['cookie'] = $_COOKIE['user'];
// echo $twig->render('example.html.twig', ['rows' => $rows]);
echo $twig -> render('base.html.twig', ['rows' => $rows, 'name_list' => $name_list]);