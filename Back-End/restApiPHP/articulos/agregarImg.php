<?php
require "../includes/requester.php";

$target_dir = "../img/product_images/";
$target_file = $target_dir . basename($_FILES["articulo"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if (move_uploaded_file($_FILES["articulo"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["articulo"]["name"])). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}