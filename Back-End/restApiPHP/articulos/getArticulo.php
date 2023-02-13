<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$id=$_REQUEST["id"];
$query = "SELECT * FROM articulo a INNER JOIN modelo m ON m.id_modelo=a.id_modelo INNER JOIN marca mr ON mr.id_marca=a.id_marca  WHERE a.id_articulo=".$id.";";
$usuarios = $db->fetchAll($query);
echo json_encode($usuarios);