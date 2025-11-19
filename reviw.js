// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then(data=>{
     
//     console.log(num=>num.title)
// })
// .catch(error=>console.log(error))


// function add(num){
// let number = new Promise((resolve,reject)=>{
    
//     if(num%2===0){
//         resolve("even")
//     }else{
//         reject("odd")
//     }
// });
// number
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log("that is error",error)
// })
// }
// console.log(add(3))
// add(3)
//     .then((message)=>{
//         console.log(message)
//     })
//     .catch((error)=>{
//         console.log("that is error",error)
//     })



// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => {
//     data.forEach(item => console.log(item.title));
// })
// .catch(error => console.log(error));


// async function getpost(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await response.json();
//         data.forEach(item=>console.log(item.title))
// }catch(err){
//     console.log(err)
// }
// }
// getpost();




// -Synchronous and Asynchronous
// -Execution Context
// -Strict Mode
// -Call Stack
// - Temporal Dead Zone
// - Exception Handling
// - Shadowing
// - Illegal Shadowing
// - Coercion
// - Memory Leak
// - Stack Overflow & Stack Underflow
// - Object
// - Class
// - Deep Copy vs Shallow Copy
// - Instance
// - Memoization
// - Allocation & Deallocation
// - Constructors
// - Generator Function
// - Currying
// - Callback Function
// - Promises and handling Promise-based methods
// - Fetch API (Getting Data using Fetch API)
// - Async and Await

                        
                 
    function store(item){
return new Promise((resolve,reject)=>{
   let  store={
        apple:0,
        orange:3,
        watermelon:2
    }
    if(store[item]>0){
        resolve(item+ " is has stock "+store[item]+" is available" )
    }else{
        reject(item +" is out of stock")
    }
})
}
async function check(item){
    try{
        const result =await store(item)
        console.log(result)
    }catch(err){
        console.log(err)
        
    }
}
check("apple")
check("watermelon")     
              
                                
                     
                      
                    
           
       

                                           
                             
     