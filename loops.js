//for(var i=0;i<10;i++)
//{
//	console.log(i);
//}


const arr=[1,2,3,4,5];

//for(const num of arr)
//{
	//console.log(num);
//}

const greeting ="hello World";
for(const greet of greeting)
{
//	console.log(`value of greeting ${greet}`);
}

const map = new Map();
map.set("IN","india");
map.set("usa","united");
map.set("fr","france");

//console.log(map);

// forof loop on map for key value
for(const [key,value] of map)
{
	//console.log(key, ":", value);
}
//IN : india
//usa : united
//fr : france

//forof loop on Object is not chalu 


const myobj ={
		'game':'nfs',
		'game2':'gta',
}

for(const key in myobj){
	//console.log(`${key} : ${myobj[key]}`);
}
//this is how we can iterate the Object

//forin on Array
const arr2=["java","cpp","js","python"];

for(const key in arr2)
{
	//console.log(arr2[key]);
}

//for each loop 
const program =["python","cpp","ruby","js"];

program.forEach(function(val){
//console.log(val);
}
)

program.forEach((val)=>{
console.log(val)})
 