// // freeze method //
// const obj={
//     fname:"veer",
//     age:23
// }
// console.log("original object",obj)

// Object.freeze(obj);
// obj.city="prayagraj"
// obj.age=89;
// delete obj.fname;
// console.log("after the adding the property ",obj);


// // array destructuring//

// let arr=[1,2,44,56,232];
// const [one,two]=arr;
// console.log("origianl array ",arr)
// console.log("one=>",one,"two",two)

// // object destructuring //

// let person={
//     id:101,
//     name:"veer",
//     data:{
//         city:"prayagraj"
//     }
// }

// const {id,name,data}=person;
// const {city}=data;
// console.log("id",id,"name",name,data)


// for of loop is used for 

// object destructuring

// const getUser=()=>{return "veer"}
// const U=users=["virendra","veeru", "jai","jitendra",getUser];
// const [x1,x2,x3,x4,x5]=users;
// console.log(x5());
// console.log(x5);



// array destructuring

let person = ["javascript js", 34, 108];

let name = person[0];
let pages = person[1];
let price = person[2];
console.log(name);
console.log(pages);
console.log(price);

let arr1=[name, pages, price]=person;

let arr=["veer", "virendra","veeru"];
console.log(arr[1]);
console.log(arr[0]);
console.log(arr[2])




// length find in array  //

let arr2=[1,3,4,5,6,7];
console.log(arr2.length);

let arr3=[9,5,6,33,32];
console.log(arr2);





  
