const promiseone=new Promise(function(resolve,reject){
	// any type of async task
	
	setTimeout(function(){
		console.log("Async task is completed");
		resolve();
	},1000);
	
});

promiseone.then(function(){
	console.log("promise is executed");
});

////////////////////////////////////////////////////////////////////
//syntax second without taking variable and alone method
new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("Async 2 is completed");
		resolve();
	},1000);
}).then(function(){console.log("promise2 completed");});

//////////////////////////////////////////////////////////////////////

// value passing through resolve to then 

const promisethree=new Promise(function(resolve,reject){
	// any type of async task
	
	setTimeout(function(){
		console.log("Async task is completed");
		resolve({username:"Dipak",email:"dm@gmail.com"});
	},1000);
	
});

promisethree.then(function(user){
	console.log(user);
});



///////////////////////////////////////////////////////////////



const promisefour=new Promise(function(resolve,reject){
	// any type of async task
	setTimeout(function(){
		const error=true;
		if(!error)
		{
			resolve({user:"Rohini",age:45});
		}
		else{
			reject("ERROR:something wrong");
	}}
		,1000);
});
//chainnig of the functions 
promisefour.then(function(user){
	console.log(user);
}).then(function(user){
console.log(user);}).catch(function(error){
console.log(error)}).finally(function(){
console.log("finally the promise is either resolved or reject")});



/////////////////////////////////////////////////////////////

const promisefive = new Promise(function(resolve,reject){
	setTimeout(function()
	{
		const error=true;
		
		if(!error)
		{
			resolve({user:"Dipak",age:21});
		}
		else{
			reject("error has been occured");
		}
	},1000);
});

async function consume()
{
	try{
		const user=await promisefive;
		console.log(user);
	}
	catch(error){
	console.log(error);
	}
}
consume()


//////////////////////////////////////////////////////

fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response)=>
{
	return response.json();
})
.then( (data)=> console.log(data))
.catch((error)=>console.log(error));