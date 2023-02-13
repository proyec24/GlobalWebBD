<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$imageRoute = "http://localhost/globalweb/Back-end/restApiPHP/img/user_images/".$params->imgName;
$query = "INSERT INTO usuario VALUES (NULL, '$params->contrasena',
'$params->correo','$params->apellido_materno','$params->apellido_paterno',
'$params->nombres', '$imageRoute',2)";
$usuarios = $db->insert($query);
echo json_encode($usuarios);