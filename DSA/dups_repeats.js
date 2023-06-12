const arr=[1,2,3,1,3,5,4];

const res=arr.reduce((acc,curr)=>{
    if(!acc[0].includes(curr)){
        acc[0].push(curr);
    }
    else{
        acc[1].push(curr);
    }
    return acc;
},[[],[]]);
console.log("Unique : " , res[0]);
console.log("Dups : " , res[1]);
