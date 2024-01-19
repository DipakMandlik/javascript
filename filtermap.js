const coding = ["ruby","python","js"]

const values = coding.forEach( (item) => {
		return item;
} )

//console.log(values); //undefined


//const nums=[1,2,3,4,5,6,7,8]

//const val=nums.filter( (num)=> num>4) //ach values la satisfy kel jat 
//console.log(val);//filter method ch example book ch lkshat thevach particular condition dileli asti tyavrun aaplayala access krta yet

const newnum=[1,2,3,4,5,6,7,8,9,10]

//const newmap=newnum.map( (item)=> item=item+10);
//console.log(newmap); //nivant ekdm mast paiki

const array=[1,2,3,4,5]

const intialvalue =0;
const sum=array.reduce(function(acc,current)
{
	//console.log(`acc: ${acc} and current ${current}`)
	return acc+current;
},0)

//console.log(sum);//15

const mytotal=array.reduce( (acc,current) => acc+current,0);//smart way of writing 
//console.log(mytotal);



