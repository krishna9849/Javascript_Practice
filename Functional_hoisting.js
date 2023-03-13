functionHoisting();

function functionHoisting(){
    console.log("This is a functional hoisting  :  Define anywhere and call from anywhere")
}


// do not make functional hoisting --- functional expressions come into picture

//funExp1(); // TypeError: funExp1 is not a function
var funExp1=function() {
    console.log("this is a functional expression and not hoisted")
}

funExp1()


//funExp2(); // TypeError: funExp1 is not a function
var funExp2=()=> {
    console.log("this is a functional expression and not hoisted")
}

funExp2()
