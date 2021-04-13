
function validate() {

	var email = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(email!="admin" && password!="admin")
	{
		alert("Please enter correct credentials!!");
		return false;
		
	}
	else
    return true;
}
