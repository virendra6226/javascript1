
// agar pura h1 ko access karna ho to 
let dataElement=document.getElementById("data")

console.log(dataElement.innerHTML)

// multiple p ko access karna hai to 
// document.getelementsbytahname ka use karenge ya class name ka 
// html collection return karta hai
let myContent=document.getElementsByTagName("p")
console.log(myContent);
// agar mujhe multiple para me se kisi ek ko sirf print karana ho to 

console.log(myContent[2].innerHTML)




let btn=document.querySelector("button");
console.log(btn);

btn.addEventListener("click",function(){
    alert("virendra click karo pahle ");
})
