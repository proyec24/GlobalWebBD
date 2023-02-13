<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT * FROM usuario 
WHERE correo='$params->correo' and contrasena='$params->contrasena'";
$usuarios = $db->fetchRow($query);
echo json_encode($usuarios);