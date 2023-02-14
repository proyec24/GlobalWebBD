<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT id_carrito FROM carrito where id_usuario=$params->idusuario";
$carrito = $db->fetchRow($query);
$query = "SELECT total_articulo FROM articulo_carrito 
    where id_carrito=$carrito->id_carrito ";
$usuarios = $db->fetchAll($query);
$total=0;
foreach ($usuarios as $total_articulo=>$valor) {
    $total = $total+$valor->total_articulo;
}
echo json_encode($total);