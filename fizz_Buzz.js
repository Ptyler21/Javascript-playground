/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

for(var i =0; i < 101; i++){
if(i % 3 == 0){
  console.log("FIZZ");
  }
else if(i % 5 == 0){
    console.log("BUZZ");
  }
else if(i == (i % 3 == 0) && (i % 5 == 0)){
    
    console.log("FIZZBUZZ");
   }

else
console.log(i);

}