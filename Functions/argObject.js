/*

arguments is an object 

follow below example;

[arguments]={"0" : 1 ,"1" : 2 , "2" : 3  ......}

*/


function args (){
    console.log(arguments)
}

args(4,5,6,7,3,5,6)  //[Arguments] { '0': 4, '1': 5, '2': 6, '3': 7, '4': 3, '5': 5, '6': 6 }

//default param

function hello(a = 10){
    console.log(a); // line2
    console.log(arguments); //line3
    arguments[0] = 9;   // line4
    console.log(arguments);   //line5
    console.log(a);  //line6
   }
   
   hello(4);