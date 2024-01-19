//function saymyname(){
	//console.log("D");
	//console.log("I");
	//console.log("P");
	//console.log("A");
	//console.log("K");
//}
//saymyname//reference
//saymyname()//execute
//function addnumber(number1,number2)//parameters
//{
//	console.log(number1+number2);
//}

//addnumber(5,7);//arguments
//addnumber(5,9);
function addnumber(number1,number2)//parameters
{
	return number1+number2;
}

const result=addnumber(10,5);
//console.log(result);

function justlogggedIn(username)
{
	return '${username} just log in';
}

let status1=justlogggedIn("Dipak");
console.log(status1);