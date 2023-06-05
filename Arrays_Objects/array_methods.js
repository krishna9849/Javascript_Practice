var arr=[1,2,3,4,5,6,7];

arr.push(8);
console.log("PUSH : " , arr);

arr.pop();
console.log("POP : " , arr);

arr.shift();
console.log("SHIFT : " , arr);

arr.unshift(1);
console.log("UNSHIFT : " , arr);

delete arr[4];
console.log("DELETE : " , arr)

const flatterArr=[[1,2],[3,5],[6,7]];
arr=flatterArr.flat();
console.log("FLAT : " , arr);

arr.splice(3,0,4);
console.log("SPLICE : " , arr) // added 4 in arr at index=3.... 0 indicates no replacements

const newARR= arr.slice(3); // slice creates a new array
console.log("SLICE : ", newARR);
