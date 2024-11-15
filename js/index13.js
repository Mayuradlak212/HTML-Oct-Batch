console.log("Promise is Starting");

// Promise , then , catch , finally 
const myPromise = function (n) {
    return new Promise((resolve, reject) => {
        console.log("Promise is up")

        if(n%2==0){
           return  resolve(n*2);
        }
        else{
           return reject("Something went wrong")
        }
        
    })
}
// myPromise("10").then((value) => {
//     console.log("Value is ",value)
// }).catch((error) => {
//     console.log("Error is ",error)
// }).finally(() => {
//     console.log("Finally I will always execute")
// })
// console.log(myPromise())


const personProfile={
    name:"Mayur",
    age:25,
    address:{
        street:"ABC",
        city:"Pune"
    },
    email:"Dy9H2@example.com",
    phone:9876543210
}
let educationProfile={
    degree:"Bachelor of Technology",
    college:"XYZ University",
    yearOfPassing:2018
}
 educationProfile={
    ...educationProfile,
    city:"Mumbai",
    degree:"Master of Technology"
 }
 console.log("Education : ",educationProfile)

// const person ={
//     ...personProfile,
//     ...educationProfile
// }

// console.log("Person Profile ",person)


const arr1=[1,2,4,6,7];

const arr2=[4,5,6,7,8];

const mergedArray=[...arr1,...arr2];

// console.log("Merged Array ",mergedArray)