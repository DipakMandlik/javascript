function multiplyby5(num){
	return num*5;
}

multiplyby5.power=2;

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);



function createusername(username,score)
{
	this.username=username;
	this.score=score;
}


createusername.prototype.increment = function(){
	this.score++;
}

createusername.prototype.printme = function(){
	console.log(this.score);
}

const chai = new createusername("chai",25);
const tea = new createusername("tea",250)
chai.printme()