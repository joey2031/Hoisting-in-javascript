var x;
var y = 7;



console.log("The value of x is " + x); // prints undefied
console.log(`The value of y is ${y}`); // prints 7


// prints undefied this is called hoisting, it brings the var z(the declraion) but not the assignment of 7 to the top. This is usless we do not want this.
console.log(`The value of z is ${z}`); 
var z = 7;

// This is why let is better then var because it does not hoist the variables.

let a = 90;
let w;
console.log(`the value of w is ${w}`);
console.log(`The value of a is ${a}`); // prints 90
console.log(`The value of b is ${b}`); //this will not print, instead it gives you a run time error. Also anything you put after this line will not execute because of the run time error. 
let b = 70;