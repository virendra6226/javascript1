async function getData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/`)
        const result = await response.json()
        console.log(result)
    }
    catch (error) {
        console.log(error, "error message");
    }
}
getData();


async function factUser() {
    try {
        const data = await fetch(`https://fakestoreapi.com/products/`);
        const result = await data.json();
        console.log(result);

        result.map((item) => {
                myContainer.innerHTML += `<div>
        <p>${item.category}</p>
        <p><b>${item.title}</b></p>
        <p><img src="${item.image}"></p>
        </div>`

            })
        }
    catch (error) {
            console.log("solve the errror", error)
        }
    }
factUser();

    const myContainer = document.getElementById("container");
    console.log(myContainer);





 const myContact=document.getElementById("content");
 console.log(myContact);


async function userData(){
    try{
         const contact=await fetch(`https://fakestoreapi.com/products/`);
    const content=await contact.json();
    console.log(content);
    content.map((run)=>{
        myContact.innerHTML +=`<div>
        <p>${run.category}</p>
       <p>${run.title}</p>
       <p><img src="${run.image}" alt=""></p>

        </div>`
    })
    }
    catch(error){
        console.log("print hello virendra",error)
    }

    }
    userData();



let arr = [23, 12, 43, 45, 12, 11, 2, 4];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);


let numbers = [5, 6, 1, 3, 4, 8, 90, 54];
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let result = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = result;
        }
    }
}
console.log(numbers);

// w a p to descending order 
let data = [34, 23, 4, 5, 87, 23, 76, 45]
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] < data[j + 1]) {
            let run = data[j];
            data[j] = data[j + 1];
            data[j + 1] = run;
        }
    }
}
console.log(data);




let n = 5;

if (n % 2 === 0) {
    console.log("even numbers")
}
else {
    console.log("odd numbers")
}




//max and min

let x = 34;
let y = 45;
[x, y] = [y, x];
console.log("swapping a numbers", x, y);

console.log(1 - "1");
console.log(3 + "5");

async function dataMember() {
    try {
        const resulting = await fetch(`https://fakestoreapi.com/products/1`);
        const dating = await resulting.json();
        console.log("resulting", resulting);
    }
    catch (error) {
        console.log("print my message", error);
    }
}

dataMember();



let response = [23, 32, 12, 11, 21, 56, 45, 90, 60];
for (let i = 0; i < response.length; i++) {
    for (let j = 0; j < response.length - i - 1; j++) {
        if (response[j] > response[j + 1]) {
            let temp = response[j];
            response[j] = response[j + 1];
            response[j + 1] = temp;
        }
    }
}
console.log(response);