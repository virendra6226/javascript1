// // let str = "hello how are you";
// // let temp = str.split("").reverse().join("");  // print reverse string 
// // console.log(temp);
// // console.log(str);



// //convert str in only 1 array
//  let str1 = "hello how are you";
// //  console.log(str.split());  
// console.log([...str1]);
// // console.log(str1.split(" "));
// // console.log(str1.split(" a"));

// // let str2="my name is virendra";


// //spread operator

// let arr=[1,2,3,4,5];
//  let arr1=[6,7,8,9]
//  const mergeArray=[...arr, ...arr1];

//  console.log(mergeArray);



 //1. Print "Hello World"
console.log("Hello, World!");


Output:

Hello, World!




//2. Add Two Numbers
let a1 = 5, b1 = 7;
console.log("Sum:", a1 + b1);


Output:

Sum: 12

//3. Find Square of a Number
let num1 = 6;
console.log("Square:", num1 * num1);


Output:

Square: 36

//4. Find Cube of a Number
let numa = 4;
console.log("Cube:", numa ** 3);


Output:

Cube: 64

//5. Swap Two Numbers
let x = 10, y = 20;
[x, y] = [y, x];
console.log("x:", x, "y:", y);


Output:

x: 20 y: 10

//6. Check Even or Odd
let n1 = 11;
console.log(n1% 2 === 0 ? "Even" : "Odd");


Output:

Odd

//7. Find Factorial
let n2 = 5, fact = 1;
for (let i = 1; i <= n2; i++) fact *= i;
console.log("Factorial:", fact);


Output:

Factorial: 120

//8. Reverse a String
let str1 = "hello";
console.log(str1.split("").reverse().join(""));


Output:

olleh
//9. Palindrome Check
let str2 = "madam";
console.log(str2 === str2.split("").reverse().join("") ? "Palindrome" : "Not Palindrome");


Output:

Palindrome

//10. Fibonacci Series
let n3 = 7, a2 = 0, b2 = 1;
for (let i = 0; i < n3; i++) {
  console.log(a);
  [a2, b2] = [b2, a2 + b2];
}


Output:

0
1
1
2
3
5
8

//11. Largest of Three Numbers
let a = 10, b = 20, c = 15;
console.log("Largest:", Math.max(a, b, c));


Output:

Largest: 20

//12. Sum of Digits
let num = 1234, sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log("Sum of digits:", sum);


Output:

Sum of digits: 10

//13. Reverse a Number
let num = 1234, rev = 0;
while (num > 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log("Reverse:", rev);


Output:

Reverse: 4321

//14. Armstrong Number Check
let num = 153, sum = 0, temp = num;
while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = Math.floor(temp / 10);
}
console.log(sum === num ? "Armstrong" : "Not Armstrong");


Output:

Armstrong

//15. Prime Number Check
let n = 13, prime = true;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) { prime = false; break; }
}
console.log(prime ? "Prime" : "Not Prime");


Output:

Prime

//16. Print Prime Numbers 1–50
for (let n = 2; n <= 50; n++) {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) { prime = false; break; }
  }
  if (prime) console.log(n);
}


Output:

2 3 5 7 11 13 17 19 23 29 31 37 41 43 47

//17. Leap Year Check
let year = 2024;
console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not Leap Year");


Output:

Leap Year

//18. Count Vowels in String
let str = "javascript";
let count = (str.match(/[aeiou]/gi) || []).length;
console.log("Vowels:", count);


Output:

Vowels: 3

//19. Count Words in Sentence
let str = "I love JavaScript programming";
console.log("Words:", str.trim().split(/\s+/).length);


Output:

Words: 4

//20. Find GCD of Two Numbers
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log("GCD:", gcd(20, 28));


Output:

GCD: 4

//21. Find LCM of Two Numbers
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log("LCM:", lcm(12, 18));


Output:

LCM: 36

//22. Find Minimum in Array
let arr = [5, 3, 9, 1, 7];
console.log("Min:", Math.min(...arr));


Output:

Min: 1

//23. Find Maximum in Array
let arr = [5, 3, 9, 1, 7];
console.log("Max:", Math.max(...arr));


Output:

Max: 9

//24. Sort Array Ascending
let arr = [5, 3, 9, 1, 7];
console.log(arr.sort((a, b) => a - b));


Output:

[1, 3, 5, 7, 9]

//25. Remove Duplicates from Array
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log([...new Set(arr)]);


Output:

[1, 2, 3, 4, 5]

//26. Merge Two Arrays
let a = [1, 2, 3], b = [4, 5, 6];
console.log([...a, ...b]);


Output:

[1, 2, 3, 4, 5, 6]

//27. Find Second Largest Number
let arr = [10, 20, 5, 30, 25];
let sorted = [...new Set(arr)].sort((a, b) => b - a);
console.log("Second Largest:", sorted[1]);


Output:

Second Largest: 25

28. Factor of a Number
let n = 28;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) console.log(i);
}


Output:

1 2 4 7 14 28

//29. Table of a Number
let n = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}


Output:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

//30. Sum of Array Elements
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);


Output:

Sum: 15















