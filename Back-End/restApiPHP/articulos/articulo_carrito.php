<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT id_carrito FROM carrito where id_usuario=$params->id_usuario";
$carrito = $db->fetchRow($query);
$query = "INSERT INTO articulo_carrito VALUES (NULL, ".$carrito->id_carrito.",$params->id_articulo,$params->cantidad_articulos,$params->total_articulo)";

$usuarios = $db->insert($query);
echo json_encode($usuarios);