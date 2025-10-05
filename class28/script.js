// // get a reference to the button elements
// var button = document.getElementById("myButton");
// console.log(button);

// // add events listener to the button

// button.addEventListener("click", function () {
//     alert("button was click me")
// })

// // var using access the value inside function and outerside the function

// // function example() {
// //     if (true) {
// //         var count = 29;
// //         console.log(count);
// //     }
// //     console.log(count)
// // }


// // //using let 

// // function example(){
// //     if(true){
// //         let count = 23;
// //         console.log(count);
// //     }
// //     console.log(count);
// // }

// // using const

// // add multiple string

// let str1="virendra";
// let str2="how are you";
// let result=str1+" "+ str2;
// console.log(result);


// // using concat method join two string and array not change in original array or string

// let result2= str1.concat(" ",...str2);
// console.log(result2);


// // extract a portion of a string

// let substring=result.substring(5,18);
// console.log(substring);

//arrow function

// let addition=(n,m)=>n+m;
//     console.log(addition(5,6));


// function add(x,y){
//     return x+y;
// }
// console.log(add(4,3));

// let fruits=["apple","banana","guava"];
// let str3=fruits.toString();
// console.log(str3);


// // objects

// let person={
//     fullName:"Virendra",
//     hobbies: ["cricket","music","swimming", "jimnastic", "other talent"],
//     greet:function(){
//         console.log("Name"+ this.fullName);
//     },
// };
// let keys=Object.keys(person);
// console.log(keys);

//  let values=Object.values(person);
//  console.log(values);




// shallow copy
 const person = {
  name: "Virendra",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
};

// Shallow copy using spread (...)
const copyPerson = { ...person };

// Changing nested property
copyPerson.address.city = "Indore";

console.log(person.address.city); // "Indore" (original bhi change ho gaya)



// deep copy using object
const person1 = {
  name: "Virendra",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
};
// shallow  copy using array 
// 
const arr = [1, 2, [3, 4]];
const arr2 = [...arr];

arr2[2][0] = 99;
console.log(arr1); // [1, 2, [99, 4]]  (original badal gaya)

// deep copy using array
const arr1 = [1, 2, [3, 4]];
const arr2 = structuredClone(arr1);

arr2[2][0] = 99;
console.log(arr1); // [1, 2, [3, 4]]  (original safe)

// Deep copy
const deepCopy = structuredClone(person1);

// Change nested property
deepCopy.address.city = "Indore";

console.log(person1.address.city); //  "Bhopal" (original safe)
