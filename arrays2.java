const marvel=["thor","ironman","spiderman"];
const dc=["batman","flash","superman"];

//marvel.push(dc);
//console.log(marvel)
//smja mla flash pahije tr khup odd way in access krayla lagn
//console.log(marvel[3][1])

//conact method
//const allhero=marvel.concat(dc);
//console.log(allhero)//hyani 2 array mix kele ani combine array pass kela 


//aapn regularly spread use krto 
const newhero=[...marvel,...dc]
//console.log(newhero)//same like concatenate
const arr=[1,2,3,[4,5,6],[4,[7,8,9]]];
//console.log(arr)
//console.log(arr.flat(Infinity))//all array  with its value separated and it is combined in the new array

console.log(Array.isArray("dipak")) 
console.log(Array.from("dipak"))//covert into array if is unable to made array then it return the empty array

const sc=100;
const sc2=200;
const sc3=300;

console.log(Array.of(sc,sc2,sc3)); //new array returnkrto using the off
