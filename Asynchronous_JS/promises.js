let promise1= new Promise((res,rej)=>{

    setTimeout(()=>{
        res("Promise 1 resolved")
    } , 1000)
})

let promise2= new Promise((res,rej)=>{

    setTimeout(()=>{
        rej("Promise 2 rejected")
    } , 0)
})

let promise3= new Promise((res,rej)=>{

    setTimeout(()=>{
        res("Promise 3 resolved")
    } , 3000)
})

const arrOfPromises=[promise1,promise2,promise3];

let promiseAll=Promise.all(arrOfPromises);
promiseAll.then(res=>console.log(res)).catch(rej=>console.log(rej))


let promiseAllSettled=Promise.allSettled(arrOfPromises);
promiseAllSettled.then(res=>console.log(res)).catch(rej=>console.log(rej))

let promiseRace=Promise.race(arrOfPromises);
promiseRace.then(res=>console.log(res)).catch(rej=>console.log(rej))


let promiseAny=Promise.any(arrOfPromises);
promiseAny.then(res=>console.log(res)).catch(rej=>console.log(rej))