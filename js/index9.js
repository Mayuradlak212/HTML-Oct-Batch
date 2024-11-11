console.log("Welcome to Function ");

function printName(){
    console.log("My Name is Mayur");
}

printName();



// Parameterize Function 
function getSum(a,b){
    console.log("A ",a)
    console.log("B ",b)
    let sum=a+b;
    return sum;
}

let sum =getSum(10,20)
console.log("Sum of Given Number ",sum)

// const myFun=function(){
//     console.log("My Function");
// }

const getMultiplication = function(a,b){
    console.log("My Function it is used for Multiplication");
   return a*b;
}
const ans=getMultiplication(10,20);
console.log("Multiplication ",ans)

const arrowFunction =(a,b)=>{
    console.log("Arrow Function");
    console.log("Division ",a/b)
}

arrowFunction(200,20)