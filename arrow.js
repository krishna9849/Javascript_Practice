//regular vs arrow function

//1. syntax

//regular 

function regular(){
console.log("regular function")
}
//arrow
var arrow=()=>{
    console.log("arrow function")
}
regular();
arrow();

// 2.  duplicate params

function reg(x,x){
    console.log(x*x);
}

reg(2,2)

// var arr=(x,x)=>{  //SyntaxError: Duplicate parameter name not allowed in this context
//     console.log(x*x)
// }
// arr(2,2);

// 3. argument binding

let user ={

    name :"gfg",
    gfg_regular(){
        console.log("argument binding using this keyword in regular function " , this.name); //gfg
    },
    gfg_arrow : ()=>{
        console.log(" No argument binding will happens in arrow function " , this.name); //undefined 
    }
}

user.gfg_regular();
user.gfg_arrow();