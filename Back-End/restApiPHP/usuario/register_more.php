<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "INSERT INTO info_usuario VALUES (NULL, '$params->estado',
    '$params->calle','$params->no_exterior','$params->colonia',
    '$params->cp', $params->id_usuario)";
$usuarios = $db->insert($query);
echo json_encode($usuarios);