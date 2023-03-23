console.log(this); //window

const rabbit = { name: "White Rabbit" };

function concat(str) {
  console.log(this === rabbit);
  // return str2 + " " +this.name + " and " + str;
  return str + " " + this.name;
}

//console.log(concat.call(rabbit , "Hello"));//call

//console.log(concat.apply(rabbit , ["Bye" , "hi"]));

const bound = concat.bind(rabbit, "Hello");
console.log(bound());
