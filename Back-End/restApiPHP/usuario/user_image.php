<?php
require "../includes/requester.php";

$params = $_FILES["user"];

$target_dir = "../img/user_images/";
$target_file = $target_dir . basename($_FILES["user"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if (move_uploaded_file($_FILES["user"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["user"]["name"])). " has been uploaded.";
} else {
    echo "Sorry, there was an error uploading your file.";
}
