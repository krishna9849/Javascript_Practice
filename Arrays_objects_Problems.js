//1. Javascript Code remove the duplicate element in the array

const arr = ["a", "b", "c", "a", "c", "d", "a"];

const removeDuplicates = (arr) => {
  const obj = {};
  arr.map((item) => {
    console.log(obj, obj[item]);
    if (obj[item]) {
      obj[item] += 1;
      //it will never come due to obj[item] = 0 always means false it will go to else condition
    } else {
      obj[item] = 0;
    }
  });
  return Object.keys(obj);
};

console.log(removeDuplicates(arr));

// JavaScript practice program to iterate the object and log the object by framing the meaningful sentence


const car =[{
    color : 'black',
    speed : '120 Km/h',
    brand : 'audi',

     start :function(){
        console.log('car started');
    },
    stop : function(){
        console.log('car stopped');
    }
},
{
    color : 'red',
    speed : '125 km/h',
    brand : 'BMW',
    start :function(){
        console.log('car started');
    },
    stop : function(){
        console.log('car stopped');
    }
}]



for([key,value] of Object.entries(car)){

    console.log(`my car is ${value.brand} and color is ${value.color}`);
}


//3. JavaScript practice program to get the number of times the particular letter is occurring in the
//given string

let str = 'OCCURRENCE';

str=str.split("");

const repeat={}

str.map(item =>{
    if(repeat[item]){
        repeat[item]+=1;
    }
    else{
        repeat[item]=1
    }
})

for(key in repeat){
    console.log(`${key} is repeated ${repeat[key]} times`)
}