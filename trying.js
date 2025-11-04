// const student={
//     name:"Ameer",
//     age:20,
//     grade:"A",
// };
// for (let x in student){
//     console.log(x+":"+student[x]);
// }
//Create an object student with properties name, age, and grade. Print all values using a for...in loop.
// const person={
//     nmme:"john",
//     city:"delhi",
//     country:"india"
// };
// for(let x in person){
//     console.log(x+":"+person[x]);
// }
//Create an objemarks){
//     if(marks[x]<40){
//         console.log(x+ " mark is "+marks[x]);
//     }ct person with name, city, and country. Print each key and value.
// const marks = { english: 45, maths: 39, science: 60 };
// for(let x in 
//}//Create an object marks with subject names as keys and scores as values. Print the scores of subjects where the score is less than 40.    
// fruits = { apple: 50, mango: 70, banana: 30 };
// let total=0;    
//   for(let x in fruits){
//      total += fruits[x];
//   }   
//   console.log(total)



// const subjects = { math: 60,
//                    science: 70,
//                    english: 70,
//                    history: 43, 
//                    geography: 35 };
 
// for (let x in subjects) {
//    if(subjects[x]<50){  
//       console.log(x + "has failed with " + subjects[x]); 
//    }                   
// }
// let total=0;
// for (let y in subjects){
// if( subjects[y]<50){
//    total += subjects[y];
 
// }
// }
//  console.log("Total marks of failed subjects: " + total); 
// const laptop = {
//   brand: "HP",
//   model: "Pavilion 15",
//   processor: "Intel Core i5",
//   ram: "16GB",
//   storage: "512GB SSD",
//   price: 55000,
//   color: "Silver"
// };

// for(let x in laptop){
//    console.log(x + ":" + laptop[x]);
// }
// console.log(laptop.price);

//    if(laptop.price>5000){
//       console.log("expensive laptop")
//    }else{
//       console.log("budget laptop")
//    }
//    for(let w in laptop){
//       console.log(w);
//    }
// for(let i in laptop){
//    console.log(laptop[i])
// }
//  
// const cart = [
//   { brand: "HP", price: 55000, qty: 1 },
//   { brand: "Dell", price: 65000, qty: 2 },
//   { brand: "Lenovo", price: 48000, qty: 1 }
// ];
// let totel=0;
// for(let x of cart){
//    // total=+x.price*x.qty;
//    totel+=x.price
//    // console.log(totel)
// }console.log(totel)


// const laptop = { brand: "Asus", price: 58000, ram: "8GB" };
// const {brand,price,ram}=laptop;
// console.log("brand",brand);
// console.log("ram",ram)


// const laptops = {
//   hp: { price: 55000 },
//   dell: { price: 65000 },
//   lenovo: { price: 48000 }
// };
// for (let brand in laptops) {
//   console.log("Brand:", brand);
// }
// const laptops = {
//   hp: {
//     model: "Pavilion 15",
//     processor: "Intel Core i5",
//     ram: "8GB",
//     storage: "512GB SSD",
//     price: 55000
//   },
//   dell: {
//     model: "Inspiron 14",
//     processor: "Intel Core i7",
//     ram: "16GB",
//     storage: "1TB SSD",
//     price: 65000
//   },
//   lenovo: {
//     model: "IdeaPad Slim 5",
//     processor: "AMD Ryzen 5",
//     ram: "8GB",
//     storage: "512GB SSD",
//     price: 48000
//   },
//   asus: {
//     model: "VivoBook 16",
//     processor: "Intel Core i3",
//     ram: "8GB",
//     storage: "256GB SSD",
//     price: 42000
//   }
// };
//  laptops.hp.model="pavillion"
// console.log( laptops.hp)
// for(let x in laptops){
//    console.log(x.price);
// }










