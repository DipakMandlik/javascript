//ES6 nantr ch chalu aapl

class User{
	constructor(username,email)
	{
		this.username =username;
		this.email=email;
	}
	
	ecrypt(){
		return (`${this.username} is the username`)
	}
	
	changeusername(){
		return (`${this.username.toUpperCase()}`);
	}
	
	
}

const chai =new User("Dipak","dipakmandlik03@gmail.com");
//console.log(chai.ecrypt());
//console.log(chai.changeusername());


function user2(username,pass,email)
{
	constructor(username,pass,email)
	{
		this.username=username;
		this.pass=pass;
		this.email=email;
	}
}

const tea=new user2("Dipak",2003,"d03@gmail.com");

user2.prototype.changename = function(){
	return `${this.username.toUpperCase()}`
}

console.log(tea.changename());