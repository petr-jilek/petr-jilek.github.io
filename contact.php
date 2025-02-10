<?php
if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $subject = "Web Contact Form" . $name;
    $emailTo = "info@enercosolutions.cz";

    $headers = "From: " . $email;

    $content = "Name: " . $name . "\n";
    $content .= "Email: " . $email . "\n";
    $content .= "Phone: " . $phone . "\n";
    $content .= "Message: " . $message . "\n";

    mail($emailTo, $subject, $content, $headers);
}
