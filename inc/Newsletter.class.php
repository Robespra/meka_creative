<?php
class Newsletter
{
    private static $email;
    private static $datetime = null;

    private static $valid = true;

    public function __construct() {
        die('Init function is not allowed');
    }

    public static function register($email) {
        if (!empty($_POST)) {
            self::$email    = $_POST['signup-email'];
            self::$datetime = date('Y-m-d H:i:s');

            if (empty(self::$email)) {
                $status  = "error";
                $message = "Please provide a valid email address.";
                self::$valid = false;
            } else if (!filter_var(self::$email, FILTER_VALIDATE_EMAIL)) {
                $status  = "error";
                $message = "Woops... this email address format is not valid.";
                self::$valid = false;
            }

            if (self::$valid) {
                $pdo = Database::connect();
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $existingSignup = $pdo->prepare("SELECT COUNT(*) FROM signups WHERE signup_email_address='$email'");
                $existingSignup->execute();
                $data_exists = ($existingSignup->fetchColumn() > 0) ? true : false;

                if (!$data_exists) {
                    $sql = "INSERT INTO signups (signup_email_address, signup_date) VALUES (:email, :datetime)";
                    $q = $pdo->prepare($sql);

                    $q->execute(
                        array(':email' => self::$email, ':datetime' => self::$datetime));

                    if ($q) {
                        $status  = "success";
                        $message = "Thank you! I have added your email address to the early access list. Hang tight, I'll let you in soon.";
                        
                    } else {
                        $status  = "error";
                        $message = "Error, please try again.";
                    }
                } else {
                    $status  = "error";
                    $message = "This email address is already in the early access list. We'll be sure to send you an invitation as soon as possible so you can start using mēkā.";
                }
            }

            $data = array(
                'status'  => $status,
                'message' => $message
            );

            echo json_encode($data);

            Database::disconnect();
        }
    }
}

