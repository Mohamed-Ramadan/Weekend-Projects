<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "hdpt@hvac-iec.com";
 
    $email_subject = "Contact US Email";
 
     
	function phpAlert($msg) {
		echo '<script type="text/javascript">alert("' . $msg . '")</script>';
		exit;
	}
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "يمكنك الرجوع لتصحيح الخطأ<br /><br />";
        
        die();
 
    }
 
	
    // validation expected data exists
	
    if(!isset($_POST['first_name']) ||
 
        !isset($_POST['last_name']) ||
 
        !isset($_POST['nID']) ||
 
		!isset($_POST['job']) ||
		
		!isset($_POST['email']) ||
        
		!isset($_POST['telephone']) ||
		
		!isset($_POST['department']) ||
		
        !isset($_POST['comments'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $first_name = $_POST['first_name']; // required
 
    $last_name = $_POST['last_name']; // required
 
	$nID = $_POST['nID']; // required
	
	$job = $_POST['job']; // required
	
	$department = $_POST['department']; // required
	
    $email_from = $_POST['email']; // required
 
    $telephone = $_POST['telephone']; // not required
 
    $comments = $_POST['comments']; // required
	
	
    $error_message = "";
 
    //$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    //$string_exp = "/^[A-Za-z .'-]+$/";
	//$number_exp = "/[0-9]+$/";
	
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
 
	$email_message .= "nID: ".clean_string($nID)."\n";
	
	$email_message .= "Job: ".clean_string($job)."\n";
	
	$email_message .= "department: ".clean_string($department)."\n";
	
	$email_message .= "Email: ".clean_string($email_from)."\n";
    
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
 
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
  mail($email_to, $email_subject, $email_message, $headers);  

	echo "<script> 
		alert('تم إراسال الرسالة بنجاح , شكرا لتواصلك معنا , سوف نتواصل معك قريبا.');
		window.location.href='contactform.html';
		</script>";
	
?>
 
 
 
<!-- include your own success html here -->
 

 
 

 
 
 
<?php
 
}
 
?>
