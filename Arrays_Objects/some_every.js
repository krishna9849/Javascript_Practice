function isOdd(num){
    
    if(num%2!==0){
        return true;
    }
    return false;

}

function arr(tempArr){
    
   const res= tempArr.every(isOdd);
   const out=tempArr.some(isOdd);
   console.log(res);
   console.log(out);
}

arr([1,3,5]);
arr([12,3,4,6,3,5]);