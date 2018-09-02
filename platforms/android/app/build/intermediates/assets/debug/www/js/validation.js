function validate_email(){
     
   var emailID = document.forms["mail_form"]["email"].value;
   atpos = emailID.indexOf("@");
   dotpos = emailID.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       //alert("Please enter correct email ID")
       //document.forms["mail_form"]["email"].focus() ;
       
       document.getElementById("email_span").innerHTML="please enter valid email id"
       return false;
   }
   document.getElementById("email_span").innerHTML=""    
   return( true );
}

