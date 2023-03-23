//Array destructuring
let fruits=["apple","orange"];
let [a,b]=fruits;
let [c,d]=["red " , "green"]
console.log("a is " , a)
console.log("b is " , b)
console.log("c is " , c)
console.log("d is " , d)


// object destructuring

let person ={name : "Krishna" , Person_age : 27};

let {Person_name,Person_age}=person;

console.log("person is " , person)
console.log("name is " , Person_name)
console.log("age is " ,Person_age)