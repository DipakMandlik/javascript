//let a=10;
//const b=20;
//var c=30;

if(true)
{
	let a=10;
	const b=20;
	var c=30;
}
//console.log(a)
//console.log(b)
//console.log(c)//hyamule var ha block scope methododly follow nhi krit hence we can neglet italics


//*****************************************************************************************************


function addone(num){
	return num+1;
}
console.log(addone(5));//hyala ky prblm nhiyenar 
console.log(addtwo(6));//hoisting concept lkshat thevaychi 
const addtwo= function addtwo(num){
	return num+2;
}
console.log(addtwo(6));

