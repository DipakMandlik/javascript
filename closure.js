function makefun(){
	const name="mailla";
	function displayname()
	{
		console.log(name);
	}
	
	return displayname;
}

const myfun = makefun();
myfun();