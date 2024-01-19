//function chai()
//{
//	console.log("DB connected");
//}
//chai()

(function chai()
{
	console.log("DB connected");
})();//these is how function iife without giving separate executaive function
//semicolon kshala lkshat thevaych
(function aurcode()
{
	console.log("DB2 connected");
})();

(()=>
{
	console.log("DB3 connected");
})();

(function chai()
{
	console.log("DB connected");
})('parameter ithundyayche')