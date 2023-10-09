<?php

$env = parse_ini_file('.env');

$user = $env['MYSQL_USER'];
$mdp = $env['MYSQL_MDP'];



$conn = mysqli_connect("db", $user, $mdp, "php_docker");

// Check connection
if(!$conn){
  die('Connection error: '). mysqli_connect_error();
}else{
    echo "connection etablie";
}

$table_name = "User";

$query = "SELECT * FROM $table_name";

$response = mysqli_query($conn, $query);

echo $table_name;
while($i = mysqli_fetch_assoc($response)){
  echo $i['name'];
  echo $i['firstname'];
  echo $i['age'];
}
