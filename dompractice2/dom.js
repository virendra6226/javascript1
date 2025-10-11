

// let paraElement=document.querySelector("p");



// let btn1=document.querySelector("#addClass");

// btn1.addEventListener("click",()=>{
//    paraElement.addClass("paraelement")
// })


let arr=[23,45,12,23,11,4,5,67];
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


let ar=[23,45,12,23,11,4,5,67];
for(let i=0;i<ar.length;i++)
{
   for(let j=0;j<ar.length-i-1;j++)
   {
      if(ar[j]<ar[j+1])
      {
         let temp=ar[j];
         ar[j]=ar[j+1];
         ar[j+1]=temp;
      }
   }
}
console.log(ar);




// even or odd numbers

let n=4; 
if(n%2==0)
{
   console.log("even numbers" ," "+ n);
}
else{
   console.log("odd numbers"+n);
}


let numbers=[2,3,1,3,2,5,6,7,8];
let max=Math.max(...numbers);
let min=Math.min(...numbers);
console.log("print the maximum numbers"," " +max);
console.log(" print the minimum numbers"," " +min);


//maximum numbers find with the help of loop

let num=[23,45,32,12,11,34];
let large=(0);
for(let i=0;i<num.length;i++)
{
   if(num[i]>max)
      max=num[i]
}
console.log(" print the maximum numbers",+max);

// write the minimum elements

let string=[12,34,23, 11,67];
let small=(0);
for(let i=0;i<string.length;i++)
{
   if(string[i]<min)
   {
      min=string[i];
   }
}
console.log("print the minimum number of elements"," "+min)



// write the program of fibonacci series 

let m=10;
let x=0,y=1;
let next;
console.log("fibonacci series");
for(let i=1;i<=m;i++){
   console.log(x);
   next=x+y;
   x=y;
   y=next;
}


// w a p to fibonacci series

let bus=10;
let d=0, e=1;
let num1;
console.log("fibonacci series")
for(let i=1;i<=bus;i++)
{
   console.log(d);
   num1=d+e;
   e=d;
   d=num1;

}
let brand=6;
let bread=0,pakoda=1;
let burgery;
console.log("print the series")
for(let i=1;i<=brand;i++)
{
   console.log(bread);
   burgery=bread+pakoda;
   pakoda=bread;
   bread=burgery;
}


// w  a p to swap

let nine=23;
let ten=34;
[nine,ten]=[ten,nine];
console.log(nine);
console.log(ten);


// natural numbers

for(let i=1;i<=10;i++){
   console.log("print the natural numbers"," "+i);
}

// w a p to palindrome numbers

let str="virendra";
let reversed=str.split(``).reverse().join(``);
if(str===reversed){
   console.log("numbers is palindrome",+str)
}
else{
   console.log("not palindrome numbers",+str)
}
