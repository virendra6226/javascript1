// array create


// Empty array
let arr1 = [];

// With values
let arr2 = [10, 20, 30, 40];

// Using constructor
let arr3 = new Array(5); // length = 5, empty slots
let arr4 = new Array(1, 2, 3); // [1,2,3]

console.log(arr1, arr2, arr3, arr4);




// Traversing (Looping through Array)

let arr = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for...of
for (let num of arr) {
  console.log(num);
}

// forEach
arr.forEach((value, index) => {
  console.log(index, value);
});




//3. Adding & Removing Elements
let fruits = ["apple", "banana"];

// Add
fruits.push("mango");     // end
fruits.unshift("grapes"); // start

// Remove
fruits.pop();     // last remove
fruits.shift();   // first remove

console.log(fruits);


//4. Searching in Array
let nums = [10, 20, 30, 40, 50];

console.log(nums.indexOf(30));   // 2
console.log(nums.includes(100)); // false
console.log(nums.find(n => n > 25)); // 30
console.log(nums.findIndex(n => n > 25)); // 2



//5. Transformation (map, filter, reduce)

let numbers = [1, 2, 3, 4, 5];

// map → transform values
let squares = numbers.map(n => n * n);
console.log(squares); // [1,4,9,16,25]

// filter → condition based values
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2,4]

// reduce → accumulate into single value
let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15


//6. Sorting & Reversing

let arr = [5, 1, 4, 2, 3];

arr.sort(); // default (string sort)
console.log(arr); // [1,2,3,4,5] works for numbers too with callback

arr.sort((a, b) => b - a); // descending
console.log(arr);

arr.reverse(); // reverse array
console.log(arr);

//7. Combining & Slicing

let a = [1, 2];
let b = [3, 4];

// concat
let c = a.concat(b);
console.log(c); // [1,2,3,4]

// spread operator
let d = [...a, ...b];
console.log(d);

// slice (copy portion)
let arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1, 3)); // [20,30]

// splice (add/remove in between)
arr.splice(2, 1, 99); // remove 1 at index 2, insert 99
console.log(arr);


//8. Multi-Dimensional Arrays

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]); // 6

// Traverse 2D
for (let row of matrix) {
  for (let val of row) {
    console.log(val);
  }
}



//9. Useful Array Methods

let arrw = [1, 2, 3, 4, 5];

// some & every
console.log(arrw.some(n => n > 4));  // true
console.log(arrw.every(n => n > 0)); // true

// join → string
console.log(arrw.join("-")); // "1-2-3-4-5"

// flat
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1,2,3,4]

// from (convert array-like to array)
let str = "hello";
console.log(Array.from(str)); // ['h','e','l','l','o']



//11. Flatten Deep Nested Array
let nested = [1, [2, [3, [4, 5]]]];

function flatten(arr) {
  return arr.reduce((acc, val) =>
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

console.log(flatten(nested)); // [1,2,3,4,5]

12. Rotate Array (Left / Right)
let arr = [1, 2, 3, 4, 5];

// Right rotate by 2
function rotateRight(a, k) {
  k = k % a.length;
  return [...a.slice(-k), ...a.slice(0, -k)];
}

console.log(rotateRight(arr, 2)); // [4,5,1,2,3]

13. Chunk an Array (Divide into parts)
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1,2,3,4,5,6,7], 3));
// [[1,2,3],[4,5,6],[7]]

14. Intersection & Difference of Arrays
let a = [1,2,3,4];
let b = [3,4,5,6];

// Intersection
let inter = a.filter(x => b.includes(x));
console.log(inter); // [3,4]

// Difference
let diff = a.filter(x => !b.includes(x));
console.log(diff); // [1,2]

15. Frequency Count of Elements
let arr = [1,2,2,3,4,4,4,5];

let freq = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(freq); // {1:1,2:2,3:1,4:3,5:1}

16. Palindrome Check using Array
let str = "madam";
let isPalindrome = str === str.split("").reverse().join("");
console.log(isPalindrome); // true

17. Remove Falsy Values
let arr = [0, 1, false, 2, "", 3, null, "hello", undefined];

let clean = arr.filter(Boolean);
console.log(clean); // [1,2,3,"hello"]

18. Random Shuffle (Fisher–Yates Algorithm)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

console.log(shuffle([1,2,3,4,5]));

19. Find Second Largest Number
let arr = [10, 40, 30, 20, 50];

let unique = [...new Set(arr)].sort((a, b) => b - a);
console.log(unique[1]); // 40

20. Spiral Traversal of 2D Array
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

function spiralOrder(mat) {
  let res = [];
  while(mat.length) {
    res.push(...mat.shift());                 // top row
    for (let row of mat) res.push(row.pop()); // right col
    if (mat.length) res.push(...mat.pop().reverse()); // bottom row
    for (let i = mat.length-1; i>=0; i--) res.push(mat[i].shift()); // left col
  }
  return res;
}

console.log(spiralOrder(matrix)); 
// [1,2,3,6,9,8,7,4,5]

