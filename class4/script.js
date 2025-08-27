let n1=0, n2=1;
console.log(n1)
console.log(n2)
for(let i=3;i<10;i++)
{
    let n3=n1+n2
    console.log(n3)
    n1=n2;
    n2=n3;
}



// object code

let teach={
    fname : "virendra",
    age: 23,
    email: "dwivedivirendrakumar@gmail.com",
    isExpression:true,
    status:null,
    getDegree: "underfined"
}
console.log("Name",teach.fname)
console.log("age",teach.age)
console.log("getdegree",teach.getDegree)
console.log("status",teach.status)

// try to use some function and object inside object 

let obj1={
    fname : "Veeru",
    age: 23,
    email: "virendrakumar@gmail.com",
    isTraining:function(){
        console.log("veer is back ")
    },
    additionalInfo:{
    no: 9165142139,
    dob:"03/012005",
    isTraining:function(){
        console.log("I am virendra kumar dwivedi i am big fan of virat kohl")
    },

    },
    10123:"virendra kumar Dwivedi",
    "Jai Veeru":"strong bonding",
    "data-info":{

    }
}

obj1.isTraining();
console.log("nested object",obj1.additionalInfo.no)
console.log("name",obj1.fname)
console.log("age",obj1.age)



let person={
    name:"veeru",
    age:"23",
    rollno: 102
}
console.log("name",person.name); 
console.log("age",person.age); 
console.log("rollno",person.rollno) 


// only keys and values find the 
let add={
    name:"veer is back",
    age: "34",
    height: 6.7
    
}
console.log(Object.keys(add)) // print only keys.

console.log(Object.values(add)) // print only values.

const obj={                                                                            
    name:"veer",
    category:"general",
    roll: "toofan",
}
console.log(obj);


 // 5

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
