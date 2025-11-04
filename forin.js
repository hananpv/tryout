// the for...in loop is used to itrate over the keys (properties) of an object 
// its perfect when you want to access property names and values from an objects

//  syntax
// (let key in object){
//   //use key and object[key]
//}



// const car ={
//     band:"suzuki",
//     model:"vitara",
//     year:2024
// };
// for(let x in car ){
//     console.log(x+"...."+car[x]);
// }


// const person = {
//   name: "Ameer",
//   age: 25,
//   city: "Kochi"
// };
// for (let key in person) {
//     console.log(key+":"+person[key]);
// }


// const student = {
//   name: "Ali",
//   english: 85,
//   maths: 90,
//   science: 78
// };
//  let total=0;
//  for(let sub in student){
//     if(sub!=="name"){
//         total+=student[sub];
//     console.log("Total marks:"+total);  
//     }
//  }


// const employee = {
//   name: "Sara",
//   position: "Manager",
//   salary: 60000,
//   department: "HR"
// };


// for(let x in employee){
//     console.log(x+",");
// }


// const person = { name: "Ali", age: 25, city: "Kochi" };

// person.age = 30;   // change value
// person.city = "Delhi";  // change another value

// console.log(person);


// const student = {
//   name: "Ali",
//   age: 20,
//   marks: {
//     english: 85,
//     maths: 90,
//     science: 78
//   }
// };
// student.marks.maths =  100;
// student.name = "john"; 
// console.log(student);


// const car = {
//   brand: "Toyota",
//   model: "Innova",
//   year: 2023
// };

// let count = 0;
// for (let key in car) {
//  console.log(key +":"+car [key]);
// }

const sub={
  chemirty:44,
  physics:55,
  maths:39,
  english:60,
  malayalam:38
};     
for(let x in sub){
    if(sub[x]<40){       
        console.log(sub[x]);
         total += sub[x];
    }
  }
  console.log("total marks of failed subjects:"+total);
 



