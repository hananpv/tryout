//   let p1 = new Promise((resolve,reject)=>{ 
//       reject("its reject");
//   })
// p1
// .then(()=>{
//     console.log("succes")
// })
//  .catch((error)=>{
//      console.log("rejected")
//  })
  let p1 = new Promise((resolve,reject)=>{
    let succes=true;
    if(succes){
        resolve("true")
    }else{
        reject("false")                                                                                                                
    }
  });
  p1
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error)
})