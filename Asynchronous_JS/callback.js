/**
 *  First class functions are  return a func by func , assign a func to a variable , pass a func as an arg
 * In these , pass a func as an arg is called call back
 */

function a(wrapper){
    console.log("Its a  normal function");
    wrapper();
}

function b(){
    console.log('IT IS A CallBack Function');
}

a(b);

// fun();
// function fun(){
//     console.log('Function')
// }