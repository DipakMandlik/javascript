const user1 ={
	username:"Dipak",
	loginCount:8,
	age:21,
	
	getUserDetails: function(){
		console.log("Got user detail");
		console.log(`${this.username}`);
		console.log(this);
	}
}

//console.log(user.username);
//console.log(user.getUserDetails());
// console.log(this);



function user(username,age,pass)
{
	this.username=username;
	this.age=age;
	this.pass=pass;
	
	return this;
}

//const userone = user("Dipak",21,'dipak03');
//const usertwo = user("Ronny",21,'ronny03');
//console.log(userone);
//console.log(usertwo);//mokar unwanted goshti det ani tyact change pn hot overriding pn

const userone = new user("Dipak",21,'dipak03');
const usertwo = new user("Ronny",21,'ronny03');

console.log(userone);
console.log(usertwo);