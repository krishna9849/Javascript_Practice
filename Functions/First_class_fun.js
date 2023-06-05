/* 

Functions which can assign to another variable  or return by another func or pass as an argument

*/


const add = (a,b)=>{
    return a+b;
}

const res=add(2,3);
console.log("Function assign as an variable " , res);

function PowerOf(number){

    return add(3,4) ** number;
}

const res1=PowerOf(2);
console.log("Function return the first class func add" ,res1);

function PowerBy(fun,number){

    return fun() ** number;
}

const res2=PowerBy(()=>{
    return 5;
},2 )

console.log("Function passed as an argument" , res2)