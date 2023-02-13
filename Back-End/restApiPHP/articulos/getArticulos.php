<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT * FROM articulo a INNER JOIN modelo m ON m.id_modelo=a.id_modelo INNER JOIN marca mr ON mr.id_marca=a.id_marca  WHERE 1;";
$usuarios = $db->fetchAll($query);
echo json_encode($usuarios);