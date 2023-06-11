/*

Async -- return a promise
await -- wait for promise to be settled (either fulfilled or rejected)

 */

 const asyncFun=async ()=>{
   let promise1 = new Promise((res,rej)=>{
      res('First')
   })
   let r1=await promise1;
   console.log(r1);
   let promise2=new Promise((res,rej)=>{
      setTimeout(res('second'),5000);
      
   })
   let r2=await promise2
   console.log(r2);
   let promise3 = new Promise((res,rej)=>{
      res('Third')
   })
   let r3=await promise3
   console.log(r3);

 }

 asyncFun();