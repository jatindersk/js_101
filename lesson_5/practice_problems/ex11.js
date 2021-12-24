let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let stringedObj = JSON.stringify(arr);
let deepCopyObj = JSON.parse(stringedObj);
// console.log(deepObj);

let updatedArr = deepCopyObj.map(obj => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
});

console.log(updatedArr);
console.log(arr);
console.log(deepCopyObj);