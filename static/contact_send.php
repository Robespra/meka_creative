<?php
require '../../inc/DBcontact_send.class.php';
require '../../inc/contact_send.class.php';
if (!empty($_POST)) {
    $email = $_POST['contact_send'];

    Newsletter::register($email);
}