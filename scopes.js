/*
Global scope
functional scope
block scope (came in ES6)

*/

var globalScope="global";

if(false){

    var blockScope ="block scope"
    console.log("block scope" , blockScope)
}

function funScope(){
    var funcScope="functional scope";

    console.log("functional scope : " , funcScope);
   
}

funScope();
console.log("block scope : " , blockScope);
console.log("global scope : " , globalScope)
