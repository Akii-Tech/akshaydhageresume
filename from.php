<?php

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];

      $to = 'youremail@example.com';
      $subject = 'New message from ' . $name;
      $body = "From: $name\nEmail: $email\nMessage:\n$message";

      if (mail($to, $subject, $body)) {
        http_response_code(200);
        echo 'Thank you for your message. We\'ll be in touch soon!';
      } else {
        http_response_code(500);
        echo 'There was a problem sending your message. Please try again later.';
      }
    }

    ?>