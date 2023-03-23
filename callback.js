//call back is a function passed as an argument for another function

const message=()=>{
    console.log("Message shows after 3 sec");
}

setTimeout(message,3000);


//callback hell  -- The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell

