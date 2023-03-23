//A function that accepts and/or returns another function is called a higher-order function

const numbers=[1,2,3,4,5,6];

const isGreaterThan = (x)=>x>2

console.log(numbers.filter(isGreaterThan)); //HOF