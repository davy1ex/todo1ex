<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo1ex</title>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <div class="container">
        <div class="title">
            ToDo1ex
        </div>
        <div class="add_tast_field">
            <form action="./add.php" method="POST">
                <input type="text" name="task" id="task" placeholder="add task" class="form-control">
                <button type="submit" name="sendTask" class="btn btn-success add_task">Add</button>
            </form>
        </div>

        <div class="tasklist">
            
            <ul>
            <?php
                require 'configDB.php';
                $query = $pdo -> query('SELECT * FROM `task` ORDER BY `id` DESC');

                while ($row = $query -> fetch(PDO::FETCH_OBJ)) {?>
                <li>
                <a href="./delete.php?id=' . $row -> id . '">
                    <div class="checkbox"> </div>
                </a>
                    <div class="title">
                        {{ row.title  }}
                    </div>
                    
                    <div class="pubdate">
                        {{ date('D H:M', $row -> pubdate) }}
                    </div> 
            <?php } ?>
                <!-- </li>
                    echo 
                    '<li>' .
                        '<a href="./delete.php?id=' . $row -> id . '">' .
                            '<div class="checkbox"> </div>' .
                        '</a>' .
                        '<div class="title">' . 
                            $row -> title  . 
                        '</div>' . 
                        
                        '<div class="pubdate">' . 
                            date('D H:M', $row -> pubdate) . 
                        '</div>  
                    </li>';
                } -->
            </ul>;
        </div>
        
    </div>
    
</body>
</html>