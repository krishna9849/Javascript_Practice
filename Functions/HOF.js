/*
Function which takes function as an argument or parameter or both

*/


function helloGreet (welcomeGreet , name ){

    return "Hi"  + " " + name + "....." + welcomeGreet()
}

const welcome = ()=>{
    return "welcome to my world!!"
}

const res = helloGreet(welcome , "krishna" );

console.log(res);