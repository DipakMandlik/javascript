const user={
	 username : "Dipak",
	price:999,
	
	welcomemessage: function() {
		console.log('${this.username},welcome to website');
		console.log(this);
	}
}

//user.welcomemessage();
//user.username="dm";
//user.welcomemessage();//${this.username},welcome to website
//{
 // username: 'Dipak',
  //price: 999,
  //welcomemessage: [Function: welcomemessage]
//}
//${this.username},welcome to website
//{
//  username: 'dm',
//  price: 999,
 // welcomemessage: [Function: welcomemessage]
//}


////////////////////////////////////////////////

const chai = function(){
	const username="Dipak";
	console.log(this.username);
}

chai()
