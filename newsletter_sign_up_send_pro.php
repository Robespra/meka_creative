<?php
require 'inc/Database_pro.class.php';
require 'inc/Newsletter_pro.class.php';
if (!empty($_POST)) {
    $email = $_POST['signup-email_pro'];

    Newsletter::register($email);
}