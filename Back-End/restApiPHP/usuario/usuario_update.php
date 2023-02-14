<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();

$query = "CALL update_user($params->id_usuario,'$params->nombres','$params->apellido_materno',
    '$params->apellido_paterno','$params->correo','$params->contrasena');";

$usuarios = $db->doQuery($query);
$query = "CALL update_more($params->id_usuario,'$params->estado','$params->calle'
    ,'$params->colonia',$params->no_exterior,$params->cp);";
$usuarios = $db->doQuery($query);
echo json_encode($usuarios);