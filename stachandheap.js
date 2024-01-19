let myuser="Rohini"
let myuser2=myuser
//console.log(myuser)
//console.log(myuser2)
//Rohini,Rohini
//ata aapn change krnar pn stack vr copy tyar honar aani tyache change bgha 
myuser="Dipak"
//console.log(myuser)
//console.log(myuser2)
//Dipak,Rohini

let user1={
	name:"Dipak mandlik",
	age:22,
}
//console.log(user1.name)
let user2=user1
//console.log(user2)
user2.name="Dipak Satish mandlik"
console.log(user2)
console.log(user1)