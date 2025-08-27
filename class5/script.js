// Write a program to print normal function 

function greet() {
  console.log("Hello, this is a Function Declaration!");
}
greet();


// w a p to function expression
const greet = function () {
  console.log("Hello, this is a Function Expression!");
};

greet();



// w a p to arrow function

const greet = () => {
  console.log("Hello, this is an Arrow Function!");
};

greet();

// anonymous function

setTimeout(function () {
  console.log("Hello, this is an Anonymous Function!");
}, 1000);


// IIFE
(function () {
  console.log("Hello, this is an IIFE Function!");
})();



// Higher order function
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log("Addition:", operate(5, 3, add));




//callback function

function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Virendra", sayBye);


 //  array program

 let and const agar function ya block ke bahar hai to unka scope script hota hai 

 let and const block ke under bante hai to unka scope block hota hai

 let const block ya function ke under root me bante hai to unka scope function hota hai

 var global hota hai 
   {
    global 
   }
   