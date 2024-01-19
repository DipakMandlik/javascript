const tinderuser = new Object();//singleton object declaration 
//const tinderuser={}//{} pn it is not an singlton user
//console.log(tinderuser)//{}
tinderuser.id="123"
tinderuser.name="Dipak"
tinderuser.age=21;

//console.log(tinderuser)  //{ id: '123', name: 'Dipak', age: 21 }

//ata aapn object inside object nestedobject

const newuser={
		name:"Dipak",
		fullname:{
			surname:"mandlik",
			middlename:"satish",
		name:"dipak",
		}
}
//console.log(newuser.fullname.surname);//accesing nested object Element using . operator

const obj1={
	1:"A",
	2:"B",
}
const obj2={
	3:"C",
	4:"D",
}

//const obj3={obj1,obj2};
//console.log(obj3);
//console.log(Object.assign({},obj1,obj2))//{} hyala target manun chalt to return rto object inside the these 
const obj3={...obj1,...obj2};
//console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));