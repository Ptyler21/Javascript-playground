/* Write a program that uses console.log to print all the numbers from 1 to 100, 
with two execptions. For numbers divisible by 3, print "Fizz" instead of the number,
and for numbers divisible by 5(and not 3), print "Buzz" instead. 

When you have that working,modify your program to print "FizzBuzz" , for 
numbers that are divisible by 3 and 5. 
*/
///making 0 - 100
for(var i =0; i < 101; i++){
  /* if number divisible by 3... */
 if(i % 3 ==0){
   console.log("Fizz"); //print Fizz
  }
 /* if number divisible by 5...*/
else if(i % 5 == 0){
 console.log("Buzz"); ///print buzz 
}

var f = i % 3 == 0; ///storing variables divisble by 3
var b = i % 5 == 0; ///storing variable divisble by 5 

/* if i equals f and b then print FizzBuzz */
if (f && b){
 console.log("FizzBuzz");
}
else 
console.log(i);
}