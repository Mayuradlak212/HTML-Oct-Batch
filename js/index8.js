console.log(" Hii I am Array ")

// let arr =[2,"Mayur",true,{name:"Mayur Adlak"},4,5,7,8]

var arr=[2,5,8]

console.log(" Array",arr);

// Length Method 
console.log("Length Method",arr.length)

// At Method of Array 
console.log("At Method of Array : ",arr.at(1))

// [1,2,4,5,6]
// arr.push(6)

// arr.push(100)
// console.log("Push Method ",arr)

// arr.pop()
// console.log("Pop Method ",arr)

// arr.shift()
// console.log("Shift Method ",arr)


// arr.unshift(45)
// console.log("Unshift Method ",arr)
// to String Method
console.log("Join Method : ", arr.join(" "))


console.log("To String method ",arr.toString())


// console.log("Reverse Method ",arr.reverse())

// Slice Method 
// 3,6
// console.log("Slice Method ",arr.slice(2,4))

  
// [2,5,8]
//   *5 

// map
const updatedArr=arr.map((value,index)=>{
    return  value*5;
})

const filteredArr =arr.filter((value,index)=>{
    return value%2==0;
})
// console.log("filtered ", filteredArr)
// console.log("Updated Array ", updatedArr)

// Find Method 
const data =arr.find((value,index)=>{ 
    return value===5;
})

var arr2=[4,5,6,78,3,3]
let mergedArr=arr.concat(arr2)
// console.log("Find Method ",data)
console.log("Merged Arr",mergedArr)