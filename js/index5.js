// console.log("Hii Welcome to Object ")

let city ={
    name:"New York",
    population:800,
    country:"USA",
    capital:"Washington D.C.",
    isCapitol:true,
    area:1280000,
    populationDensity:8500,
    languages:["English","Spanish","French"],
}
// key : value 

// const keys =Object.keys(city)
// const values  =Object.values(city)

const entries =Object.entries(city)
// console.log("Entries : ",entries)
// console.log("City values",values)
// console.log("City keys",keys)
// console.log("City Object" ,city)



console.log("Hello We are Learning LocalStorage ")

localStorage.setItem("name","Bhavani")
console.log("Name is Stored Succefully in Local Storage")

let myName =localStorage.getItem("name");


console.log("My Name is ",myName)

// localStorage.removeItem("name");
console.log("Name Removed")

let name  = localStorage.getItem("name");

// localStorage.clear()
console.log("Name  After Deletion ",name)



// sessionStorage.setItem("name","Mayur Adlak ")