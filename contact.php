<?php
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        try {
            $input = json_decode(file_get_contents('php://input'), true);

            $name = $input['name'];
            $email = $input['email'];
            $phone = $input['phone'];
            $message = $input['message'];

            $subject = "Web Contact Form - " . $name;
            $emailTo = "info@enercosolutions.cz";

            $headers = "From: " . $email;

            $content = "Name: " . $name . "\n\n";
            $content .= "Email: " . $email . "\n\n";
            $content .= "Phone: " . $phone . "\n\n";
            $content .= "Message: " . $message . "\n\n";

            $ok = mail($emailTo, $subject, $content, $headers, '-f ' . $email);

            if ($ok) {
                header("HTTP/1.1 200 OK");

                exit();
            } else {
                header("HTTP/1.1 500 Internal Server Error");

                exit();
            }
        } catch (Exception $e) {
            header("HTTP/1.1 500 Internal Server Error");

            exit();
        }

        break;

    default:
        break;
}
