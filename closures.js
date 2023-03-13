//functions with lexical scope is called closure

// closure means an outer function giving access of inner function

// function outerFun(){

//     var outer="I am outside";

//     function innerFun(){

//        console.log(outer);

//     }

// innerFun();

// }

// outerFun();


//closure
function outerFun(){

    var outer="I am outside";

    function innerFun(){

       console.log(outer);

    }

return innerFun;

}

const fn= outerFun();
fn();