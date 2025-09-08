// Function definition creating function basic
function greet() {
  console.log("Hello, Welcome to JavaScript!");
}

// Function call
greet();



 // named function 

// Named function definition
function greetAdd() {
  console.log("Hello, This is a named function");
}

// Calling the function
greetAdd();


// output  hello , this is a named function.

//  2    Named Function with Parameters

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(10, 20));  // Output: 30



// pure function
function add(a, b) {
  return a + b; // Always returns same output for same input
}

console.log("Pure Function:");
console.log(add(2, 3));  // 5
console.log(add(2, 3));  // 5 (same input → same output)



// impure function
let counter = 0;

// Impure Function
function increaseCounter() {
  counter++;   // Modifies external variable
  return counter;
}

console.log("\nImpure Function:");
console.log(increaseCounter());  // 1
console.log(increaseCounter());  // 2 (different output without changing input)


// arrow function

// Normal function
function greet() {
  return "Hello, World!";
}

// Arrow function
const greetArrow = () => "Hello, World!";

console.log(greetArrow());  // Output: Hello, World!



// hoc function

function multiplier(factor) {
  return function(num) {
    return num * factor;  // inner function uses outer function variable
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
