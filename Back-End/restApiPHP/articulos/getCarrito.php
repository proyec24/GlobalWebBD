<?php
require "../includes/connection.php";
require "../includes/requester.php";
$params = Requester::getParams();
$query = "SELECT id_carrito FROM carrito where id_usuario=$params->idusuario";
$carrito = $db->fetchRow($query);
$query = "SELECT p.*,a.*,m.*,n.* FROM articulo_carrito p  
inner join articulo a on a.id_articulo=p.id_articulo
inner join modelo m on m.id_modelo=a.id_modelo
inner join marca n on n.id_marca=a.id_marca
    where p.id_carrito=$carrito->id_carrito ";
$usuarios = $db->fetchAll($query);
echo json_encode($usuarios);