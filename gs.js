class userAgent{
	constructor(email,pass)
	{
		this.email=email;
		this.pass=pass;
	}
	
	get pass(){
		return this._pass;
	}
	
	set pass(value){
		this._pass=value;
	}
	
}
 const dipak = new userAgent("d03@gmail.com",2324);
 
console.log(dipak.pass);


