const arr = [{name : "a" , age : 25},
            {name : 'b' , age : 60},
            {name : 'c' , age : 25},
            {name : "d" , age : 60},
            {name : 'e' , age : 26},
            {name : 'f' , age : 28}]

const arrAge=arr.reduce((obj , person)=>{
    const {age}= person;
    if(!obj[age]){
       obj[age]=[];
    }
    obj[age].push(person.name);
    return obj;
},{})

console.log(arrAge);