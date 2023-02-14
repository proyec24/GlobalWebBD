<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT * FROM view_usuario;";
$usuarios = $db->fetchAll($query);
echo json_encode($usuarios);