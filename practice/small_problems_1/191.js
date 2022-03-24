function findChildren(dancingBrigade) {
  let char = "";
  let arr = dancingBrigade.toLowerCase().split("").sort().map(item => {
    if (item !== char) {
      char = item;
      return item.toUpperCase();
    }
    return item;
  }).join("");

  return arr;
}

console.log(findChildren("beeeEBb")); // "BbbEeee"
console.log(findChildren("uwwWUueEe")); // "EeeUuuWww"

// function findChildren(dancingBrigade) {
//   let result = '';
//   let sorted = dancingBrigade.split('').sort((a, b) => a.localeCompare(b))
//     .join('');

//   for (let idx = 0; idx < sorted.length; idx += 1) {
//     let current = sorted[idx];
//     for (let end = idx + 1; end <= sorted.length; end += 1) {
//       if (sorted[end] === undefined || current !== sorted[end].toLowerCase()) {
//         let sliced = sorted.slice(idx, end);
//         result += sliced.split('').sort().join('');
//         idx = end - 1;
//         break;
//       }
//     }
//   }
//   return result;
// }