<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();

$query = "INSERT INTO carrito VALUES (NULL, $params->id_usuario)";

$usuarios = $db->insert($query);
echo json_encode($usuarios);