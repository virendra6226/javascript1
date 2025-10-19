let arr=[23,21,34,43,78,65];
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
            {
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }       
    }
}
console.log(arr);

let data=[34,56,43,32,12,22,11,34];
for(let i=0;i<data.length;i++){
    for(let j=0;j<data.length-i-1;j++)
    {
        if(data[j]<data[j+1])
        {
            let run=data[j];
            data[j]=data[j+1];
            data[j+1]=run;
        }
    }
}
console.log(data);



let num=[12,34,53,23,12];
let numbers=(num.length);
console.log(numbers);


console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");

function getData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

getData(() => {
  console.log("Callback executed!");
});


const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully!");
  }, 2000);
});

myPromise.then((message) => {
  console.log(message);
});

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fetched using async/await");
    }, 2000);
  });
}

async function displayData() {
  console.log("Start");
  const result = await fetchData(); // waits here until promise resolves
  console.log(result);
  console.log("End");
}

displayData();


