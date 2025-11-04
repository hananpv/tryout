// | Method         | Description                                              | Example (Syntax)                   |
// | -------------- | -------------------------------------------------------- | ----------------------------------- |
// | **push()**     | Adds item(s) to the end of array                         | `arr.push(10);`                     |
// | **pop()**      | Removes the last item                                    | `arr.pop();`                        |
// | **shift()**    | Removes the first item                                   | `arr.shift();`                      |
// | **unshift()**  | Adds item(s) to the beginning                            | `arr.unshift(5);`                   |
// | **sort()**     | Sorts array items                                        | `arr.sort();`                       |
// | **reverse()**  | Reverses array order                                     | `arr.reverse();`                    |
// | **map()**      | Creates new array by applying a function to each element | `arr.map(x => x * 2);`              |
// | **filter()**   | Returns array with items that pass a condition           | `arr.filter(x => x > 10);`          |
// | **reduce()**   | Reduces array to a single value                          | `arr.reduce((a, b) => a + b);`      |
// | **forEach()**  | Runs a function for each element                         | `arr.forEach(x => console.log(x));` |
// | **find()**     | Finds first element that matches condition               | `arr.find(x => x > 10);`            |
// | **includes()** | Checks if value exists in array                          | `arr.includes(5);`                  |
// | **concat()**   | Merges two arrays                                        | `arr1.concat(arr2);`                |
// | **slice()**    | Returns a portion of array                               | `arr.slice(1, 3);`                  |
// | **splice()**   | Adds/removes elements                                    | `arr.splice(2, 1);`                 |
                                                                                 
 
// let array=[2,3,4,1,6,7,5,];
// array.push(8);
// console.log(array);// add at the end
  

// let array=[2,3,4,1,6,7,5,];
// array.unshift(1);
// console.log(array);// add at the beginning


// let array=[2,3,4,1,6,7,5,];
// array.pop();
// console.log(array);// remove from the end


// let array=[2,3,4,1,6,7,5,];
// array.shift();
// console.log(array);// remove from the beginning


// let array=[2,3,4,1,6,7,5,];
// array.sort();
// console.log(array);// sort the array


// let array=[2,3,4,1,6,7,5,];
// array.reverse();
// console.log(array);// reverse the array   ithe ulla array reverse aayi print aayi


// let array=[2,3,4,1,6,7,5,];
// let newarray=array.map(num=>num*num);
// console.log(newarray);// new array create aayi original array maattiya illa


// let array=[2,3,4,1,6,7,5,];
// let newarray=array.filter(num=>num%2===0);
// console.log(newarray);// new array create aayi original array maattiya illa


//  let array=[2,3,4,1,6,7,5,];
//  let sum=array.reduce((a,b) =>a +b,0);
//  console.log(sum);// original array maattiya illa sum value thanne kitti


//  let array=[2,3,4,1,6,7,5,];
//  array.forEach(num=>console.log(num*2));// original array maattiya illa each elementine 2 multiply cheythu print cheythu


// let array=[2,3,4,1,6,7,5,];
// let found=array.find(num=>num>2);
// console.log(found);// original array maattiya illa first value greater than 4 kitti


// let array=[2,3,4,1,6,7,5,];
// let newarray=array.includes(7);
// console.log(newarray);// original array maattiya illa true/false kitti depending on value exists or not


//  array1=[2,3,4,1];
//  array2=[8,6,7,2];
//  let newarray=array1.concat(array2);
//  console.log(newarray);// original array maattiya illa rendu array merge aayi oru puthiya array ayi kitti


// let array=[2,3,4,1,6,7,5];
// let newarray=array.slice(2,5);
// console.log(newarray);// original array maattiya illa index 2 ninnu 5 vare values oru puthiya array ayi kitti


// let array=[2,3,4,1,6,7,5];
// let spliced=array.splice(2,3);
// console.log(spliced);// original array maattiya illa index 2 ninnu 3 values remove cheythu kitti
