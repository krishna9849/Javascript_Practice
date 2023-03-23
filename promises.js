//to overcome callback hell promises came into picture

//promise (In pending )?  resolved() => .then() : rejected()=> .catch ....so on

const promise=new Promise((res,rej)=>{
    if(true){
        res()
    }
    else{
        rej()
    }
});
promise.then((result)=>console.log("promise resolved")).catch((error)=>console.log("Promise rejected"));


//similarly promise hell also there