<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT * FROM info_usuario WHERE id_usuario='$params->id'";
$usuarios = $db->fetchRow($query);
echo json_encode($usuarios);