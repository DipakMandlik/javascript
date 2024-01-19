function setusername(username)
{
	this.username=username;
}

function creatUser(username,email,Password)
{
	setusername.call(this,username);
	this.email=email;
	this.Password=Password;
}

const chai=new creatUser("chai","chai@gmail.com","234");
console.log(chai);