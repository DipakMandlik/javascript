const myArr=[1,2,3,4,5];
const myarr2=["iman","nagraj"]
const myarr3=new Array(1,2,3,4);

//console.log(myArr[0]);
//console.log(myarr3[5]);
myArr.push(6);
myArr.push(7);
myArr.pop();

//console.log(myArr)

//myArr.unshift(9)//starting index la element insert kraych kam krto to mhnje unshift but not iefficient
//console.log(myArr)

console.log("A",myArr)
const new1=myArr.slice(1,3);
console.log(new1);
console.log("B",myArr)
const new2=myArr.splice(1,3);
console.log(new2);
console.log("c",myArr)
