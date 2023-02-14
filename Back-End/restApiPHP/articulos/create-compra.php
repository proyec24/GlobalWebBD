<?php
require "../includes/connection.php";
require "../includes/requester.php";
require "../sendMail.php";
require '../fpdf/fpdf.php';
$params = Requester::getParams();
$articulos = $params->articles;
$total_articulos=0;
foreach($articulos as $element){
    $total_articulos = $total_articulos+$element->cantidad_articulos;
}
$total = $params ->total;
$id = $params ->idusuario;
$correo = $params ->correo;
$timestamp = date("Y-m-d H:i:s");
$query = "INSERT INTO pedido VALUES (NULL, $id,$total_articulos,$total,'$timestamp',2)";
$usuarios = $db->insert($query);
$total2=0;
foreach($articulos as $element){
    $total2=$element->cantidad_articulos*$element->precio;
    $query = "INSERT INTO detalle_pedido VALUES (NULL, $usuarios,$element->id_articulo,$total2)";
    $total =0;
    $detalles = $db->insert($query);
}
$query = "DELETE FROM articulo_carrito where id_carrito=".$articulos[0]->id_carrito."";
    $usuarios = $db->insert($query);
$summary=array(
    "summary_products"  => $articulos,
    "total" => $total
);
$pdf = new FPDF();

$pdf->AddPage();
// set document information
$pdf->SetTitle('Pedido');

// set font for the content
$pdf->SetFont('helvetica', '', 10);
var_dump($correo);
foreach ($articulos as $element) {
    $precio = $element->cantidad_articulos*$p->precio;
    $pdf->Cell(40,10, 'Nombre:'.$element->nombre, 1, 1);
    $pdf->Cell(40,10, 'Precio unitario: ' . $element->precio, 1, 1);
    $pdf->Cell(40,10, 'Cantidad: ' . $element->cantidad_articulos, 1, 1);
    $pdf->Cell(40,10, 'SubTotal: ' . $precio , 1, 1);
}
$pdf->Cell(40,10, 'Total: ' . $params->total , 0, 1);
// output the PDF to a file or browser
$pdf->Output('pdf/orden'.$id.'.pdf', 'F');
sendMail($id,$correo);
echo json_encode($usuarios);

    
