console.log("Welcome to the Js ")

// keywords
// keyword variable_name = value
// var , const , let 

// var age =23;
// console.log("My Age is ",age)

// We Are Learning Data Type in JavaScript
/** 
1. String 
2. Number 
3. Bigint 
4. Boolean 
5. Undefined
6. Null
7. Object 
*/
// var name ="Fsefwq";
// var age="43";

// var person ={
//     name: "John",
//     age: 30,
//     city: "New York",
//     phone: "55543543",
//     email:"john@example.com"
// }
// console.log("Name ",person.name)
// String is Collections of Alphanumeric characters and Special characters
var name = "Mayur Adlak 423434 $*#()@&$^";
var age = 23;
console.log("My Name is ",name)

console.log("Data Type of Variable ",typeof name)

let num=435435358983243423345434;

console.log("My Age is :  ",typeof age)
console.log("Num Value : ", typeof num)

// 0-> false
// 1-> true
let status = false;
console.log("Status : ", status)

// let ,var, const
let data=null;
console.log("Undefined status : ", data)



var person ={
    "name": "John",
    "age": 30,
    "city": "New York",
    "phone": "55543543",
    "email":"john@example.com",
    "marks":[45,45,5,33,3],
    "address":{
        city:"New York",
        pincode:343332,
        street:"Main Street"
    }
}
delete person.address;

// JSON --> JavaScript object Notation
console.log("Person  : ",person)