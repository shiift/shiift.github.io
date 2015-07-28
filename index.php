<!DOCTYPE html>
<html>
<head>
	<title>Liam Dickson</title>
	<!-- Bootstrap core css -->
    <link href="css/darkly-bootstrap.min.css" rel="stylesheet">
    <!-- custom page css -->
    <link href="css/style.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
  <?php
      if (isset($_POST['email'])) {
          function error () {
            echo '<script type="text/javascript">var EMAIL_FAIL = true;</script>';
          }

          function send_email ($name, $email, $message, $captcha) {
              $email_to = "liamsdickson@gmail.com";
              $email_subject = "Message from $name";

              $email_message = "The following message was sent from www.liamd.com:\n\n";
              
              $email_message .= "Name: ".clean_string($name)."\n";
              $email_message .= "Email: ".clean_string($email)."\n";
              $email_message .= "Message: ".clean_string($message)."\n";

              $headers = 'From: '.$email."\r\n".
              'Reply-To: '.$email."\r\n" .
              'X-Mailer: PHP/' . phpversion();
              
              if( mail($email_to, $email_subject, $email_message, $headers) ){
                  echo '<script type="text/javascript">var EMAIL_SENT = true;</script>';
              }else{
                  error();
              }
          }

          if (!isset($_POST['name']) ||
              !isset($_POST['email']) ||
              !isset($_POST['text'])) {
              error();     
          } else {
              $name = $_POST['name'];
              $email = $_POST['email'];
              $message = $_POST['text'];
              send_email($name, $email, $message, $resp->is_valid);
          }
      }
  ?>
	<div id="main"></div>
	<script type="text/javascript" src="js/bundle.js"></script>
</body>
</html>