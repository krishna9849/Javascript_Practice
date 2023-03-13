
//Javascript by default sync language and single threaded(only one task done at a time)

// console.log("Synchronous execution Task 1")

// console.log("Synchronous execution Task 2")

// console.log("Synchronous execution Task 3")


// // to make asynchronous => web api based functions and callback , Promises has been introduced

// console.log("Asynchronous execution Task 1");

// //web api
// setTimeout(()=>{
// console.log("Asynchronous execution Task 2");
// } , 1000)


// console.log("Asynchronous execution Task 3");

// //callback 

// function callBack(){
//     console.log("call back execution Task 1");
// }

// function normal(){
//     console.log("Normal function execution Task 2");
// }

// setTimeout(callBack,1000);
// // setTimeout(()=>{
// //     console.log("Asynchronous execution Task 2");
// //     } , 5000)
    
// normal();

// //Call Back queue comes into play

// // callstack > webapi > callback queue/Task queue
// //webapi task goes to call stack queue , these job handles by event loop


// //example

// function f1(){
//     console.log("f1")
//     setTimeout(()=>{
//         console.log("f3")
//     },4000)
// }

// function f2(){
//     console.log("f2")
    
// }

// function main(){
// console.log("main")
    
// setTimeout(f1,6000);
// f2();
// }

// main();



//Promises 
//another queue is introduced in event loop which is jobqueue/micro task
//callstack > webapi > jobqueue > callback queue


//example

function p1(){
    console.log("Normal function p1")
}

function p2 (){
    console.log("I am a web api");

    setTimeout(p3,0);

     new Promise((res,rej)=>{
       
        rej("I am a rejected promise");
        res("I am a resolved promise");
    }).then(res=>console.log(res))
    .catch(rej=>console.log(rej));

   // console.log(p3());
}

function p3(){
    console.log("I am call back")
}
p2();