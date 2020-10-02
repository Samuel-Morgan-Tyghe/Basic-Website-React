
import React, { Component } from 'react';
import './App.css';

function Form() {
return(
<div>

<form action="/action_page.php">
    <h3>Quick Contact</h3>
    <p>Contact us today, and get reply with in 24 hours!</p>
    <input type="text" placeholder="Your name.."></input>
    <input type="text" placeholder="Your Number.."></input>
    <input type="text" placeholder="Your Email.."></input>
    <textarea id="subject"  placeholder="Write something.."></textarea>
    <input type="submit" value="Submit"></input>
</form>

<script language="JavaScript">
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
</script>
</div>

);
}


export default Form