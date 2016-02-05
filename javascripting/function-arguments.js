/*
## FUNCTION ARGUMENTS (Exercise 18 of 19)  
   
  A function can be declared to receive any number of arguments. Arguments  
  can be from any type. An argument could be a string, a number, an array,  
  an object and even another function.  
   
  Here is an example:  
   
     function example (firstArg, secondArg) {  
       console.log(firstArg, secondArg);  
     }  
   
  We can call that function with two arguments like this:  
   
     example('hello', 'world');  
   
  The above example will print to the terminal hello world.  


*/

function math(a,b,c){
	return (b*c)+a ;
}

console.log(math(53,61,67));