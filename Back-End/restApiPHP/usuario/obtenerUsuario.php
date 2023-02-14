<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT u.*,i.* FROM usuario u INNER JOIN info_usuario i ON i.id_usuario=u.id_usuario WHERE u.id_usuario='$params->id_usuario'";
$usuarios = $db->fetchAll($query);
echo json_encode($usuarios);