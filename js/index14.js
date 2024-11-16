console.log("Asyncronous Programming ");

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts',
            { headers: { 'Content-Type': 'application/json' } }).then(res => res.json()).then(data => resolve(data)).catch(err => reject(err))
    })
}

// fetchData().then((Data)=>{

//     console.log("Data ",Data )
// }).catch((error)=>{
//     console.log("Error ",error)
// })

async function getData() {
    try {

        const data = await fetch('https://jsonplaceholder.typicode.com/posts', { method: "GET", headers: { 'Content-Type': 'application/json' } });
        const parsedData = await data.json();
        console.log("Length of Data ", parsedData[0])
    }
    catch (error) {
        console.log("Error ", error.message)
    }
}
// getData()

async function func() {
      setTimeout(() => {
        console.log("Time is Over")
    }, 2000)
    console.log("Function is Executed")
}
func()