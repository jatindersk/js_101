//  square root of every element in arr2 needs to be present in arr1
//  count the occurances in each array
//  compare the occurances in each array -
//    if the occurance is not same for any of the elements then return false
//    else return true

function comp(array1, array2) {
  if (array1 === [] || array2 === [] || !array1 || !array2) return false;
  if (!(array2.every(num => array1.includes(Math.sqrt(num))))) return false;
  let obj1 = {};
  let obj2 = {};

  array1.forEach(num => {
    obj1[num] = obj1[num] || 0;
    obj1[num] += 1;
  });

  array2 = array2.map(num => Math.sqrt(num));

  array2.forEach(num => {
    obj2[num] = obj2[num] || 0;
    obj2[num] += 1;
  });

  for (let key in array2) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
console.log(comp(a1, a2)); // false

// let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(comp(a1, a2)); // true

// function comp(array1, array2) {
//   let obj = {};
//   array2 = array2.map(num => Math.sqrt(num));

//   array1.forEach(num => {
//     obj[num] = obj[num] || 0;
//     obj[num] += 1;
//   });

//   return Object.values(obj).every(val => val === 2);
//   // array2 = array2.sort((a, b) => a - b);
//   // array1 = array1.sort((a, b) => a - b);

//   console.log(`arr1 ${array1} arr2 ${array2}`);
//   return array1.every(num => array2.includes(num));

// //  return array2.every(num => array1.includes(Math.sqrt(num)));
// }