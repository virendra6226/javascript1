let divContainer=document.getElementById("container");
console.log(divContainer.innerHTML)
async function apicalling(url){
    try{
        divContainer.innerHTML= `<div class=spinner-border" style="margin-left:44em; "></div>`
        const data=await fetch(url);
        const res=await data.json();
        divContainer.innerHTML="";        res.map((data)=>{
            return(
                divContainer.innerHTML+=` <div>
                <img src="${data.img}" alt="">
                <p>${data.name}</p>
                <p>${data.dsc}</p>
                <p>${data.price}</p>
                <p>${data.rate}</p>
                <p>${data.country}</p>
            </div>`

            ) 
        })
    }
    catch(err){
        console.log(err)
    }
}
apicalling("https://free-food-menus-api-two.vercel.app/bbqs")