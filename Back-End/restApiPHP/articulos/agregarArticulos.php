<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$imageRoute = "http://localhost/globalweb/Back-end/restApiPHP/img/product_images/".$params->imgName;

$query = "INSERT INTO modelo VALUES (NULL, '$params->modelo')";

$modelo = $db->insert($query);

$query = "INSERT INTO marca VALUES (NULL, '$params->marca')";

$marca = $db->insert($query);

$query = "INSERT INTO articulo VALUES (NULL, '$modelo',
'$marca','$params->nombre','$imageRoute',
'$params->stock', '$params->precio')";

$usuarios = $db->insert($query);
echo json_encode($usuarios);