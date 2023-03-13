//declare anywhere access/call anywhere 
//during execution all declarations will be moved to top of the stack

//---------------variable Hoisting---------------- 

//var is hoisted but when we call before initialization stores a value undefined

//example

console.log("before declaration and initialization of  var variable  :  " ,x); // can be accessed before initialization

x=1;

var x;

console.log("After declaration and initialization of var variable  : " ,x);

// to make it undefined as reference error of the variable 
//Js introduced let , const but also hoisted

//let

//console.log("before declaration and initialization of  let  variable  :  " ,y);  // throws ref error as cannot access before initialization

//y=1; // cannot access before initialization  ---- temporal dead zone 

let y;
y=1;
console.log("After declaration and initialization of let  variable  : " ,y);


//let

//console.log("before declaration and initialization of  const  variable  :  " ,z);  // throws ref error as cannot access before initialization

//z=1;// temporal dead zone ref error

const z=1;

console.log("After declaration and initialization of let  variable  : " ,z);



//These let and const will be in temporal dead zone before initialization 
