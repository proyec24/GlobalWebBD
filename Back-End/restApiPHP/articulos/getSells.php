<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT * FROM pedido p INNER JOIN usuario u ON u.id_usuario=p.id_usuario INNER JOIN estatus e ON e.id_estatus= p.id_estatus ";
$usuarios = $db->fetchAll($query);
echo json_encode($usuarios);