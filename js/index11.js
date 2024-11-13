console.log("IIFE ");
// Immediately Invoked Function Expression

// (function(){console.log("IIFE  Function Called ");})();
(function () { console.log("Today Date", new Date().toLocaleString()) })();

// Closure --> When 
// function A() {
//     console.log("A Function Called ");
//     return function B() {
//         console.log("B Function Called ");
//         function C() {
//             console.log("C Function Called ");

//             return "Date  " + new Date().toLocaleString();
//         }

//         return C();
//     }

// }
// const fun = A();
// const c = fun()
// console.log(c)
// func()
try {
    console.log("Exception Handling ",a/b)
    //  throw new Error(" A is not a Defined")
    throw new ReferenceError("A is not a Defined")
}
catch (error){
    console.log("Error Occured",error.message)
}
finally{
    console.log("Finally Block Executed")
}
