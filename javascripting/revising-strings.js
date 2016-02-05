/*
REVISING STRINGS (Exercise 5 of 19)  
   
  You will often need to change the contents of a string.  
   
  Strings have built-in functionality that allow you to inspect and  
  manipulate their contents.  
   
  Here is an example using the .replace() method:  
   
     var example = 'this example exists';  
     example = example.replace('exists', 'is awesome');  
     console.log(example);  
   
  Note that to change the value that the example variable references, we  
  need to use the equals sign again, this time with the example.replace()  
  method to the right of the equals sign.  
*/

var pizza = 'pizza is alright';
pizza = pizza.replace ('alright', 'wonderful');
console.log(pizza);
