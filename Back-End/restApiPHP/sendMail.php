<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

function sendMail($id,$reciever){
	$mail = new PHPMailer();
	$mail->CharSet = 'utf-8';
	$mail->Host = "smtp.googlemail.com";
	$mail->From = "a17100195@ceti.mx";
	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->Username = "a17100195@ceti.mx";
	$mail->Password = "gatita5682";
	$mail->SMTPSecure = "tls";
	$mail->Port = 587;
	$mail->AddAddress($reciever);
	$mail->SMTPDebug = 0;   //Muestra las trazas del mail, 0 para ocultarla
	$mail->isHTML(true);                                  // Set email format to HTML
	$mail->Subject = 'GRACIAS POR PREFERIRNOS!';
	$mail->Body = '<b>Adjuntamos un resumen de tu compra nwn</b>';
	$mail->AltBody = 'Te mandamos el resumen de tu compra';

	$inMailFileName = "compra.pdf";
	$filePath = "pdf/orden$id.pdf";
	$mail->AddAttachment($filePath, $inMailFileName);

	$mail->send();
}
