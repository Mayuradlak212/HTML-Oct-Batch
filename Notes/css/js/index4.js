console.log("Hii Let's Start Data Type ")

// var name="Mayur";
// console.log("My name is ",name);

// name ="Mayur Adlak";
// console.log("My name is Updated ",name)

let Name="Mayur Adlak";
console.log("My Name is ",Name)
console.log("Length Method :  ",Name.length)

console.log("Data Type of Variable ",typeof Name)

console.log("Upper case Conversion ",Name.toUpperCase())

console.log("Lower case Conversion ",Name.toLowerCase())

console.log("Characte At ",Name.charAt(0))
// Mayur Adlak OIST 
console.log("Concat Method ",Name.concat(" OIST"))


console.log("At Method : ",Name.at(0))
// Mayur Adlak 
//M-0, a-1, y-2, u-3 , r-4
console.log("Search ",Name.search("ayur"))
console.log("Substring  ",Name.substring(0,5))

console.log("Slice  ",Name.slice(6,11))

// console.log("Split  ",Name.split(""))
// console.log("Replace ",Name.replace("a","H"))
// console.log("Replace All ",Name.replaceAll("a","H"))
// Mayur Adlak
// MHyur AdlAk


console.log("Includes Method : ",Name.includes("Q"))

console.log("Index of Method : ",Name.indexOf("k"))


let age =22;
console.log("My age is ",age)

console.log("Data Type of Variable ",typeof age)
console.log("Type Conversion ",String(age))


const status =true;
// status=false;
console.log("Status : ", status)

//JSON 


let person ={
    key:"value",
    name:"Mayur",
    age:22,
    status:true,
    marks:[4,6,7,9,20],
    address:{
        city:"Indore",
        state:"Madhya Pradesh",
        country:"India",
        pinCode:543546
    }
}
// person.city="Pune";
// // Add new Key in Object 

// person["phone"]="9876543210"

// person.marks=[3,5,7,8,9];

console.log(person)
// Delete Key from Object 
// delete person.name;
// delete person.city;
// delete person.age;
// console.log("After Deletion")
// console.log(person)