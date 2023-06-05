//---------------------------Problem 1-----------------------

let arr = [[1, 2], 3, [4, [5, [6, 7]]]];
let result = [];
function flattenedArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //result=result.concat( flattenedArray(arr[i]));
      flattenedArray(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
}

flattenedArray(arr);
console.log(result);

//-----------------Problem 2------------------

let arrOfObj = [
  { name: "Sachin", age: 25 },
  { name: "ram", age: 24 },
  { name: "gopal", age: 28 },
  { name: "chetan", age: 25 },
  { name: "bhagat", age: 24 },
];
//let ageObj={}
// arrOfObj.forEach((obj)=>{
// const {age}=obj;
//     if(!ageObj[age]){
//         ageObj[age]=[];
//     }
//     ageObj[age].push(obj.name);

// })

// console.log(ageObj);

const ageObj = arrOfObj.reduce((obj, person) => {
  const { age } = person;
  if (!obj[age]) {
    obj[age] = [];
  }
  obj[age].push(person.name);
  return obj;
}, {});

console.log(ageObj);




























