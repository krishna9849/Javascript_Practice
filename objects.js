/*----------Objects in JS--------- */

/*Object in Javascript is an entity which has properties and methods associated with it.
These objects can have properties in the form of “key : value” pairs, here key is a string
which can also be referred to as property name and value can be anything (e.g. string,
number, null, array, function etc.).*/


const obj1={
    name : "krishna",
    age:27,
    exp:["syntel",'CTS','TCS']
}

console.log("object :" , obj1)
/*-------Object Creations----------- */

//object literals

const objLiterals={
    name : "krishna",
    age:27,
    exp:["syntel",'CTS','TCS']
}
console.log("object literal :" , objLiterals)
//New Keyword

function obj(){
    
}
const newObj= new obj();
newObj.name ="wadood";
newObj.age=27;
newObj.exp=['pwc'];

console.log("object creation using new  :" , newObj)

//Using constructor and this keyword


function objConstructor(name,age,exp){
    this.name=name;
    this.age=age;
    this.exp=exp;
}

const thisObj=new objConstructor("Krishna",28,['syntel','cts','tcs']);
console.log("object creation using constructor :" , thisObj)



//using object.create

const objCreate=Object.create(objLiterals);

objCreate.name="createObj"

console.log("Object using create method" , objCreate)

/*----------Accessing objects----------- */

//access by .

console.log("Object acess by . dot : ",objCreate.name)

// for in

for (const key in objLiterals ){
 console.log("key : ", objLiterals[key]);
}

// //for each

// const Mobile={
//     brand : "Iphone",
//     Version : "11",
//     price : "58000/-"
// }

// Mobile.foreach((key,idx)=>{

//     console.log("for each access : " ,Mobile[key]);

// })



//Object.entries


const animals={
    lion : 1,
    girafee : 2,
    goat : 3,
    cat : 4
}
console.log("object : " , animals)
const entries= Object.entries(animals).forEach(val=>console.log("object entries values :" , val));
console.log("Object entires : " , entries);

//Object values

const mobiles ={
    IOS : "Iphone",
    Android : "Oneplus",
    Blueberry : "blueberry"
}

Object.values(mobiles).forEach(val=>console.log("Object Values : " , val));


//clone the object

const laptop = {
    RAM : "20GB",
    OS : "Windows10",
    CPU : "Intel",
    make : "Dell"
}

const cloneObj=Object.assign({} , laptop);

console.log("clone the object : " , cloneObj);