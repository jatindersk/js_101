let isBalanced = str => {
  let counter = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') counter += 1;
    else if (str[idx] === ')') counter -= 1;
    if (counter < 0) return false;
  }
  return counter === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

//  input: string, output: boolean
//  rules:
//  - ) not should not occur first
//  - ( should be followed by a ) only
//  algorithm:
//  - iterate through the string character by character
//  - if current character is ) return false
//  - if current character is ( then iterate from next character till end
//    - if it does not encounter a ) or finds another ( then return false
//    - otherwise continue iteration from next position where it found )

// let isBalanced = str => {
//   for (let idx = 0; idx < str.length; idx += 1) {
//     if (str[idx] === ')') return false;
//     let counter = 0;

//     if (str[idx] === '(') {
//       counter += 1;
//       for (let inner = idx + 1; inner < str.length; inner += 1) {
//         if (str[inner] === ')') {
//           counter -= 1;
//           console.log(`current char:: ${str[inner]}...counter:; ${counter}`);
//           idx = inner;
//           break;
//         } else if (str[inner] === '(') counter += 1;
//       }
//     }
//     if (counter) return false;
//   }
//   return true;
// };