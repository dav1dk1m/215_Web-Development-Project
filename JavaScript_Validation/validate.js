// Name: DongYun Kim
// Student Number: 200405213
// Date: 2022-07-21
// CS340 - Assignment 3
// File: validate.js

/***** Log In Validate *****/
function LogInForm(event)
{
    
	event.preventDefault();

	var valid = true;
	
	var elements = event.currentTarget;
	var email = elements[0].value; //Email
	var pswd = elements[1].value;  //Password

	var regex_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var regex_pswd  = /^(?=[\S]*[0-9-_]).{8,}$/; 

	var msg_email = document.getElementById("msg_email");
	var msg_pswd = document.getElementById("msg_pswd");

	msg_email.innerHTML  = "";
	msg_pswd.innerHTML  = "";

	var textNode;

	if (email == null || email == "") {
		textNode = document.createTextNode("Email address Empty");
		msg_email.appendChild(textNode);
		valid = false;
	  } 
	  else if (regex_email.test(email) == false) {
		textNode = document.createTextNode("Email address wrong format (example: username@uregina.ca)");
		msg_email.appendChild(textNode);
		valid = false;
	  }

	if (pswd == null || pswd == "") {
		textNode = document.createTextNode("Password is Empty");
		msg_pswd.appendChild(textNode);
		valid = false;
	
	  }
	  else if (regex_pswd.test(pswd) == false) {
		  textNode = document.createTextNode("Password is Invalid - Must be 8 characters or longer");
		  msg_pswd.appendChild(textNode);
		  valid = false;
		}

		if(valid == true )
	{    
	    alert("Log In successful!");
		window.location.href='http://www.webdev.cs.uregina.ca/~dkt886/a3/profile.html';
	}

}

 
/***** SIGN-UP Validate *****/

function SignUpForm(event) 
{
	event.preventDefault();

	var valid = true;
	
	var elements = event.currentTarget;
	var email = elements[0].value; //Email
	var uname = elements[1].value; //Username
	var pswd = elements[2].value;  //Password
	var pswdr = elements[3].value; //Confirm Password
	var avatar = elements[4].value; //avatar
  
	
	var regex_email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var regex_uname = /^(\w*)+$/;
	var regex_pswd  = /^(?=[\S]*[0-9-_]).{8,}$/; 
  
  

	var msg_email = document.getElementById("msg_email");
	var msg_uname = document.getElementById("msg_uname");
	var msg_pswd = document.getElementById("msg_pswd");
	var msg_pswdr = document.getElementById("msg_pswdr");
	var msg_avt = document.getElementById("msg_avt");

	msg_email.innerHTML  = "";
	msg_uname.innerHTML = "";
	msg_pswd.innerHTML  = "";
	msg_pswdr.innerHTML = "";
	msg_avt.innerHTML = "";
  
	var textNode;
  
	if (email == null || email == "") {
	  textNode = document.createTextNode("Email address Empty");
	  msg_email.appendChild(textNode);
	  valid = false;
	} 
	else if (regex_email.test(email) == false) {
	  textNode = document.createTextNode("Email address wrong format (example: username@uregina.ca)");
	  msg_email.appendChild(textNode);
	  valid = false;
	}

	if (uname == null || uname == "") {
	  textNode = document.createTextNode("Username is Empty");
	  msg_uname.appendChild(textNode);
	  valid = false;
  
	}
	else if (regex_uname.test(uname) == false) {
		textNode = document.createTextNode("Username is invalid. NO spaces or other non-word characters");
		msg_uname.appendChild(textNode);
		valid = false;
	  }

  
	if (pswd == null || pswd == "") {
		textNode = document.createTextNode("Password is Empty");
		msg_pswd.appendChild(textNode);
		valid = false;
	
	  }
	  else if (regex_pswd.test(pswd) == false) {
		textNode = document.createTextNode("Password is invalid. 8 Characters long, at least non-letter characer");
		msg_pswd.appendChild(textNode);
		valid = false;
	  }
  
	if (pswdr == null || pswdr == "") {
		textNode = document.createTextNode("Confirm Password is Empty");
		msg_pswdr.appendChild(textNode);
		valid = false;
	  }
	else if (pswd != pswdr) {
		  textNode = document.createTextNode("Confirm Password and Password do NOT match");
		  msg_pswdr.appendChild(textNode);
		  valid = false;
	  }

	if (avatar == null || avatar=="") {
		textNode = document.createTextNode("Image must be selected");
		msg_avt.appendChild(textNode);
		valid = false;
	  }

	  if(valid == true )
	{    
	    alert("Sign-Up successful!");
	}
}

function ResetForm(event) 
{
	var elements = event.currentTarget;
	var email = elements[0].value; 
	var uname = elements[1].value; 
	var pswd = elements[2].value;  
	var pswdr = elements[3].value;
	var avt = elements[3].value;  

	email = "";
	uname = "";
	pswd = "";
	pswdr = "";
	avt = "";

	var msg_email = document.getElementById("msg_email");
	var msg_uname = document.getElementById("msg_uname");
	var msg_pswd = document.getElementById("msg_pswd");
	var msg_pswdr = document.getElementById("msg_pswdr");
	var msg_avt = document.getElementById("msg_avt");

	msg_email.innerHTML  = "";
	msg_uname.innerHTML = "";
	msg_pswd.innerHTML  = "";
	msg_pswdr.innerHTML = "";
	msg_avt.innerHTML = "";
}



/***** New Poll Validate *****/
function NewPollForm(event) 
{

	event.preventDefault();

	var valid = true;
	
	var elements = event.currentTarget;

	var question = elements[0].value; //question
	var a1 = elements[1].value; //answer1
	var a2 = elements[2].value; //answer2
	var a3 = elements[3].value; //answer3
	var a4 = elements[4].value; //answer4
	var a5 = elements[5].value; //answer5
	var d1 = elements[6].value; //date open
	var d2 = elements[7].value; //date close
	var t1 = elements[6].value; //time open
	var t2 = elements[7].value; //time close


	var msg_q = document.getElementById("msg_q");
	var msg_a1= document.getElementById("msg_a1");
	var msg_a2 = document.getElementById("msg_a2");
	var msg_a3 = document.getElementById("msg_a3");
	var msg_a4 = document.getElementById("msg_a4");
	var msg_a5 = document.getElementById("msg_a5");
	var msg_d1 = document.getElementById("msg_d1");
	var msg_d2 = document.getElementById("msg_d2");
	var msg_t1 = document.getElementById("msg_t1");
	var msg_t2 = document.getElementById("msg_t2");

	msg_q.innerHTML  = "";
	msg_a1.innerHTML = "";
	msg_a2.innerHTML  = "";
	msg_a3.innerHTML = "";
	msg_a4.innerHTML = "";
	msg_a5.innerHTML = "";
	msg_d1.innerHTML = "";
	msg_d2.innerHTML = "";
	msg_t1.innerHTML = "";
	msg_t2.innerHTML = "";
  
	var textNode;


	//Question Validation
	if (question == null || question == "") {
	  textNode = document.createTextNode("Question is Empty");
	  msg_q.appendChild(textNode);
	  valid = false;
	}
	else if (question.length > 100) {
		textNode = document.createTextNode("Question must be shorter than 100 characters")
		msg_q.appendChild(textNode);
	  	valid = false;
	}

	//Answers Validation
	if (a1 == null || a1 == "") {
		textNode = document.createTextNode("Answer 1 is Empty");
		msg_a1.appendChild(textNode);
		valid = false;
	  }
	  else if (a1.length > 50) {
		textNode = document.createTextNode("Answer must be shorter than 50 characters")
		msg_a1.appendChild(textNode);
	  	valid = false;
	}
	if (a2 == null || a2 == "") {
		textNode = document.createTextNode("Answer 2 is Empty");
		msg_a2.appendChild(textNode);
		valid = false;
	  }
	  else if (a2.length > 50) {
		textNode = document.createTextNode("Answer must be shorter than 50 characters")
		msg_a2.appendChild(textNode);
	  	valid = false;
	}
	if (a3.length > 50) {
		textNode = document.createTextNode("Answer must be shorter than 50 characters")
		msg_a3.appendChild(textNode);
	  	valid = false;
	}
	if (a4.length > 50) {
		textNode = document.createTextNode("Answer must be shorter than 50 characters")
		msg_a4.appendChild(textNode);
	  	valid = false;
	}
	if (a5.length > 50) {
		textNode = document.createTextNode("Answer must be shorter than 50 characters")
		msg_a5.appendChild(textNode);
	  	valid = false;
	}

	//Date validation
	if (d1 == null || d1 == "") {
		textNode = document.createTextNode("Open date is Empty");
		msg_d1.appendChild(textNode);
		valid = false;
	}
	if (d2 == null || d2 == "") {
		textNode = document.createTextNode("Close date is Empty");
		msg_d2.appendChild(textNode);
		valid = false;
	}

	//Time validation
	if (t1 == null || t1 == "") {
		textNode = document.createTextNode("Open Time is Empty");
		msg_t1.appendChild(textNode);
		valid = false;
	}
	if (t2 == null || t2 == "") {
		textNode = document.createTextNode("Close Time is Empty");
		msg_t2.appendChild(textNode);
		valid = false;
	}

	  if(valid == true )
	{    
	    alert("NEW POLL CREATED!");
		window.location.href='http://www.webdev.cs.uregina.ca/~dkt886/a3/profile.html';
	}

}


/***** New Poll character counter *****/
function qCharCounter(event) 
{
	event.preventDefault();
	
	var x = document.getElementById("questionInput").value.length;
	document.getElementById("question").innerHTML = x + "/100";

	if(x>100)
	{
		document.getElementById("question").style.color="red";
	}
	else
	{
		document.getElementById("question").style.color="black";
	}
 }

function charCounter1(event) {

	event.preventDefault();
	
	var x = document.getElementById("ansInput1").value.length;
	document.getElementById("ans1").innerHTML = x + "/50";

	if(x>50)
	{
		document.getElementById("ans1").style.color="red";
	}
	else
	{
		document.getElementById("ans1").style.color="black";
	}
 }
 function charCounter2(event) {

	event.preventDefault();
	
	var x = document.getElementById("ansInput2").value.length;
	document.getElementById("ans2").innerHTML = x + "/50";

	if(x>50)
	{
		document.getElementById("ans2").style.color="red";
	}
	else
	{
		document.getElementById("ans2").style.color="black";
	}
 }
 function charCounter3(event) {

	event.preventDefault();
	
	var x = document.getElementById("ansInput3").value.length;
	document.getElementById("ans3").innerHTML = x + "/50";

	if(x>50)
	{
		document.getElementById("ans3").style.color="red";
	}
	else
	{
		document.getElementById("ans3").style.color="black";
	}
 }
 function charCounter4(event) {

	event.preventDefault();
	
	var x = document.getElementById("ansInput4").value.length;
	document.getElementById("ans4").innerHTML = x + "/50";

	if(x>50)
	{
		document.getElementById("ans4").style.color="red";
	}
	else
	{
		document.getElementById("ans4").style.color="black";
	}
 }
 function charCounter5(event) {

	event.preventDefault();
	
	var x = document.getElementById("ansInput5").value.length;
	document.getElementById("ans5").innerHTML = x + "/50";

	if(x>50)
	{
		document.getElementById("ans5").style.color="red";
	}
	else
	{
		document.getElementById("ans5").style.color="black";
	}
 }
 
 




	