//Function declaration

function sum(a, b) {
  //fun params
  return a + b;
}

console.log(sum(4, 5)); // function args

//----------------------------------------------------------------------------------------------------------------

//function expression
//console.log(funExp('Krishna')) // throw error due to fun exp not hoisted

let funExp = function (name) {
  return `hi ${name}, how r u? `;
};
console.log(funExp("Krishna"));

//---------------------------------------------------------------------------------------------------------------

//Function Hoisting

console.log(funHoist());

function funHoist() {
  return `this is function hoisting , call anywhere before or after fun declaration
    but function expressions are not hoisted`;
}

//-----------------------------------------------------------------------------------------------------------------

//Scopes -> block scope , functional scope , lexical scope , global scope , local scope

