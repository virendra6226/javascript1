// function createMain() {
//     let quick = 0;
//      return function () { 
//         quick++;
//         console.log(quick);
//     };
// }
// const data = createMain();
// data();
// data();
// data();
// data();
// data();
// data();
// data();


// // example of closure
//  function firstName(){
//     const quick="Virat Kohli";
//     function lastName(){
//         console.log(quick);
//     }
//     return lastName;
//  }

//  let brand= firstName();

//  brand();


// promise complete the code and basic
// 1- promise is an object.
// 2- it is  a  solution an callback hell.
// 3. there are three state in promise 
//  1 pending:- initial state 
//  2 resolve :- the task is complete in successfully 
//  3   reject :- it is not data run successfully.


// let myPromise = new Promise((resolve, reject) => {
//     console.log("virendra kumar dwivedi");
//     resolve(3000);
//     reject(new error("internal server not working"));

// })

function showName(){
    console.log("my name is virendra kumar dwivedi");
};
setTimeout (showName,1300);



