let myname="dipak"
let myname2="dipak    "


//onsole.log(myname.length);
//console.log(myname2.length);

let heropower ={
	thor:"hammer",
	spider:"web",
	
	getheropwer: function(){
		console.log(`${this.spider}`);
	}
}

Object.prototype.hitesh = function(){
	console.log("it is present in all object");
}

//heropower.hitesh();                                                   `
//heropower.getheropwer();
	

let anotherusername="dipakbhau    ";
//console.log(anotherusername.truelength);//truelength he mi khali direct prototype krun acess krnar


String.prototype.truelength= function(){
	console.log(`${this.trim().length}`);
}

anotherusername.truelength();
"hitesh".truelength();
"icetea          ".truelength();