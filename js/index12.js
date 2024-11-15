console.log("Starting my  application ")

// Callback --> When one Function take a parameter as a 
//function and execute it after completion of parent function

function printName(callback,name){
    console.log("My Name is ",name);
    console.log("Callback: Success!");
    // Calling Callback Function
    callback(); 
}


function callback(){
    console.log("Callback function called")
}

let name ="Mayur Adlak "
printName(callback,name);


function after1Second(){
    console.log("After 1 Second")
}
function after1SecondInterval(){
    console.log("Interval  1 Second")
}
// setTimeout(after1Second,1000)
// 1000= 1s 
// 5000= 5s
// it will execute  once after given time 
// setInterval(after1SecondInterval,1000)


