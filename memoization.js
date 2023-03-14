// In DP memoization is a technique to store the data which is done so that not need to perform same task again

const memo={}
function getSquare(x){

    if(memo.hasOwnProperty(x)){
        console.log("cached data")
        return memo[x]
    }
    memo[x]=x*x;
    console.log("calculated data")
    return memo[x];


}

  // returned function from memoizedAdd
  console.log(getSquare(9)); // calculated
  console.log(getSquare(9)); // cached