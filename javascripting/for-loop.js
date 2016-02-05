/*
	## FOR LOOP (Exercise 10 of 19)  
   
  For loops look like this:  
   
     for (var i = 0; i < 10; i++) {  
       // log the numbers 0 through 9  
       console.log(i)  
     }  
   
  The variable i is used to track how many times the loop has run.  
   
  The statement i < 10; indicates the limit of the loop. It will continue to  
  loop if i is less than 10.  
   
  The statement i++ increases the variable i by 1 each loop.  
*/

var total = 0;
var limit = 10;

for (var i=0; i<limit ; i++){
	total = total+i;
}

console.log(total);