// array method implementation

const arr=["veeru",18,22,{name:"virendra"}, "jay"];
console.log(arr.length);

// find index any numbers
let get=["hello","jay", "kaise ", "ho"];
console.log(get[2]);
console.log(get.at(-1));

// push method add the value in last array object any types of value addd
// push method always return in length

const data=["viru",18,22,{age:34},"virendra"];
let updated =data.push("vidhira","vidhirendra");
data.push("chasemaster","runmachine");
console.log(data);
console.log(updated);


// pop deleted last elements in array
///always return in length

const getData=["viru",{age:34},18,22,"virendra"];
getData.pop();
let greatData =getData.pop("vidhira","vidhirendra");
getData.pop("king","virat");

console.log(getData);
console.log(updated);


// shift method delete in first elements in array
// return the deleted vlaue in store other variable

let diary=["a","b","c","d"]
let uptodate=diary.shift();
console.log(diary);
console.log(uptodate);

// unshift method add the element in first index 
// modify the original array
// return always array of length
let factData=["virushka","virdhira","virdhirendra"];
let factchange=factData.unshift("jitendra","udit");
console.log(factData);
console.log(factchange);

// include method 
// if value is exist in the array so return is true
let fatanimals=["dog", "ziddi","cat"];
console.log(fatanimals.includes("ziddi"));
console.log(fatanimals.includes("Ziddi"));

// indexof method in array
//return of index numbers
// agar jo valueindex me same nahi hai to usme -1 return karta hai
let animalsData=["har har mahadev","jai shree Ram","Radhe Radhe","jai shree krishna","maa "];
console.log(animalsData.indexOf("Radhe Radhe"));

// to string change the value in array to string,

const string=["banana","apple","guava","grapes","pipeapple"];
console.log(string.toString());

// join method convert a string 
let str=["api","contexapi","fetchdata","usestate"];
let joindata=str.join("-hello javascripts kaise ho-");
console.log(joindata);


// Flat method default value of 1
// does not change the existing array

let flatData=[1,3,4,5,6,7,[32,33,[12,21,[22,11]]]];
const flatGet=flatData.flat(3);
console.log(flatGet);

// concat method 
// two arrays merge the data

const cancat=[11,23,12];
const concatdata=[2,3,4];
const datach=cancat.concat(concatdata);
console.log(datach);

// reverse method in array
// reverse the data 
const reversedata=["manoj chachaji","vinod chachaji","pradeep chachaji","buddhnarayan chachaji","satyanarayan chachaji"];
const reverse=reversedata.reverse();
console.log(reverse); 

let datatype=["hi vi kaisi ho ","virendra kaise ho tumhari job kab lagegi "];
let dataitem=datatype.reverse();
console.log(dataitem);


// slice method 
// particular elements ko print karna hai aur baaki delete
const slicedata=["virat","runmachine","chasemaster","king", "virendra","your fan","in this world"];
const slicefact=slicedata.slice(1,5);
console.log(slicefact);

// splice method
// splice basically add the value and delete the value
const splicedata=["virat","runvirendra","chasemaster","king", "virendra","your fan","in this world"];
const splice=splicedata.splice(3,0,"srk","23");
console.log(splice,splicedata);


// map method 
// change the original array create new array
let mapdata=[1,2,3,4,5,6];
let square=mapdata.map(mapdata=>mapdata*2);
console.log(square);

// sort method 
// ascending order me data ko karta hai
const numbers=["r","o",'a',"b","t"]
const num=[3,4,5,1,2,3,4];
const arrsort=num.sort();
const numb=numbers.sort();
console.log(numb,arrsort);
 

/// filters method based on condition
let numbering = [10, 20, 30, 40];
let result = numbering.filter(num => num > 20);
console.log(result);

// some method condition agar exist karti hai to true answer return karta hai
let basic = [10, 20, 30, 40];
let res = basic.some(num => num > 20);
console.log(res);


// foreach method no changes in original array
let each = ["a", "b", "c"];
each.forEach(item => console.log(item));


// reduce method ek array method hai jo sare array elements ko combine karke ek single value me return karta hai

const advance=[10,20,30,40,50];
const variables=advance.reduce((acc,curr)=>acc+curr);
console.log(variables);









