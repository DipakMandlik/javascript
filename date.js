let mydate=new Date()
console.log(mydate)//2023-12-25T03:56:53.076Z
console.log(mydate.toString())//Mon Dec 25 2023 09:26:53 GMT+0530 (India Standard Time)
console.log(mydate.toLocaleString())//25/12/2023, 9:28:03 am
console.log(mydate.toDateString())//Mon Dec 25 2023
console.log(mydate.toDateString())
console.log(typeof mydate)

//let mydate1=new Date(2023,0,23);
let mydate1=new Date("01-14-2023");
console.log(mydate1.toDateString())//Mon Jan 23 2023

let myTime=Date.now();
console.log(myTime)//1703477113886

console.log(mydate1.getTime())//miliseconds mdhi value dein
console.log(Math.floor(Date.now()/1000))//seconds

let newDate=new Date();

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getYear());


//newDate.toLocaleString('default'{
//	weekday:"long"
//)}