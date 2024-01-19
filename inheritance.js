class user{
	constructor(username){
		this.username=username;
	}
	
	logme(){
		console.log(`${this.username}`);
	}
}

class Teacher extends user{
	constructor(username,email,pass)
	{
		super(username);
		this.email=email;
		this.pass=pass;
	}
	
	addcourse(){
		console.log(`${this.username} is adding new course`);
	}
}

const chai = new Teacher("dipak","d03@gmail.com","2323");

chai.addcourse();

const masalachai = new user("Hitesh Sir");
masalachai.logme();

chai.addcourse();


console.log(chai instanceof Teacher);