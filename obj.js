const sym=Symbol("key1");

const jsuser = {
	name:"Dipak",
	"fullname":"Dipak Satish mandlik",
	age:21,
	[sym]:"dipu",
	Location:"Sangamner",
	email:"dipakmandlik03@hmailcom",
	isloggedin:false,
}
console.log(jsuser.name)//.ni access kraych but tyapeksha double quote ni use kraych
console.log(jsuser["fullname"]);
console.log(jsuser[sym]);
Object.freeze(jsuser);

jsuser.name="Dipak03";

console.log(jsuser.name)