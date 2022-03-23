//  check whether all the characters of str2 exists within str1
//    and also have same occurances

function scramble(str1, str2) {
  for (let idx = 0; idx < str2.length; idx += 1) {
    if (str1.includes(str2[idx])) {
      let index = str1.indexOf(str2[idx]);
      str1 = str1.slice(0, index) + str1.slice(index + 1);
    } else return false;
  }
  return true;
}

console.log(scramble('rkqodlw', 'world')); // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // ==> True
console.log(scramble('katas', 'steak')); // ==> False