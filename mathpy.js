const descr=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descr);

console.log(Math.PI);

const chai={
	value:0,
	name:"goodday",
	available:true
}

console.log(Object.getOwnPropertyDescriptor(chai,"value"));

Object.defineProperty(chai,'name',{
	writable:false,
	enumerable:false
});
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
