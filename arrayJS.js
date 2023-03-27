let arr = [1, 2, 3, 4, 5, 6];
let arrObj = [
  {
    name: "a",
    age: 24,
  },
  { name: "b", age: 23 },
  { name: "c", age: 30 },
];

let newArr = arr.map((item) => item * 2);
console.log(arr.reduce((prev, curr) => prev + curr, 0));
console.log(newArr);

console.log(arrObj.filter((a=> a.age >23)))

console.log(arrObj.sort((a, b) => a.age - b.age && a.name - b.name));
