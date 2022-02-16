<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['information'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "sebeiabene010@gmail.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    header('Location: thankyou.html');
?>