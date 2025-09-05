// 1. push() → (last me add karta hai)//

let arr = [1, 2, 3];
arr.push(4);
console.log(arr); 

// Output: [1, 2, 3, 4]

// 2. pop() → (last element remove karta hai)

let arr2 = [1, 2, 3, 4];
arr.pop();
console.log(arr2); 
// Output: [1, 2, 3]


//3. unshift() → (first me add karta hai)
let arr3 = [2, 3, 4];
arr.unshift(1);
console.log(arr3);
// Output: [1, 2, 3, 4]

//4. shift() → (first element remove karta hai)
let arr4 = [1, 2, 3, 4];
arr.shift();
console.log(arr4);
// Output: [2, 3, 4]


// 5. concat() → (arrays ko merge karta hai)

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);
// Output: [1, 2, 3, 4]

// 6. join() → (array ko string banata hai)

let arr5 = ["a", "b", "c"];
console.log(arr5.join("-"));

// Output: "a-b-c"

//7. slice() → (array ka part nikalta hai)

let arr6 = [10, 20, 30, 40, 50];
console.log(arr6.slice(1, 4));
// Output: [20, 30, 40]

// 8. splice() → (add/remove/update)

let arr7 = [1, 2, 3, 4, 5];
arr.splice(2, 2, 99, 100);
console.log(arr7);
// Output: [1, 2, 99, 100, 5]


//9. indexOf() → (pehli bar kaha mila)

let arr8 = [10, 20, 30, 20];
console.log(arr8.indexOf(20));
// Output: 1


// 10. lastIndexOf() → (last bar kaha mila)

let arr9 = [10, 20, 30, 20];
console.log(arr9.lastIndexOf(20));
// Output: 3



//11. includes() → (check karta hai element h ya nahi)

let arr12 = [1, 2, 3];
console.log(arr12.includes(2)); 
// Output: true


// 12. forEach() → (loop chalata hai)
let arr13 = [1, 2, 3];
arr.forEach(num => console.log(num * 2));
// Output: 2, 4, 6


//13. map() → (naya array banata hai)
let arr14 = [1, 2, 3];
let square = arr14.map(x => x * x);
console.log(square);
// Output: [1, 4, 9]



//14. filter() → (condition k elements select)
let arr15 = [5, 10, 15, 20];
let result = arr15.filter(x => x > 10);
console.log(result);
// Output: [15, 20]


//15. reduce() → (ek hi value me reduce karta hai)
let arr16 = [1, 2, 3, 4];
let sum = arr16.reduce((acc, val) => acc + val, 0);
console.log(sum);
// Output: 10

// 16. sort() → (sort karta hai)
let arr17 = [30, 5, 100, 20];
arr.sort((a, b) => a - b);
console.log(arr17);
// Output: [5, 20, 30, 100]
//


//17. reverse() → (array ko ulta kar deta hai)
let arr18 = [1, 2, 3];
arr.reverse();
console.log(arr18);
// Output: [3, 2, 1]

// 18. find() → (pehla element return karega jo condition match kare)
let arr19 = [5, 12, 8, 130, 44];
let found = arr19.find(x => x > 10);
console.log(found);
// Output: 12

// 19. findIndex() → (pehla index jo condition match kare)
let arr20 = [5, 12, 8, 130, 44];
let index = arr20.findIndex(x => x > 10);
console.log(index);
// Output: 1



//20. some() → (check karta hai agar koi ek condition true hai)
let arr21 = [1, 2, 3, 4];
console.log(arr21.some(x => x > 3));
// Output: true

// 21. every() → (check karta hai agar sabhi condition true hai)
let arr22 = [2, 4, 6];
console.log(arr22.every(x => x % 2 === 0));
// Output: true

// 22. flat() → (nested array ko flatten karta hai)
let arr23 = [1, [2, 3], [4, [5]]];
console.log(arr23.flat(2));
// Output: [1, 2, 3, 4, 5]
