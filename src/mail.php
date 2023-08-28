<?php
if($_POST){
	$email_to = "contacto@sierrafruit.com, director@sierrafruit.com";
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailContent = "$name" . ", " . "+"."$phone" . "\r\n\r\n" ."$message";

//send email
    mail($email_to, "$subject, from: " .$email, $mailContent);
}
?>