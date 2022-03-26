// function reverse_and_combine_text(str) {
//   str = str.split(' '); //.filter(el => el !== '' && el !== ' ');
//   let strLength = str.length;
//   if (strLength === 1) return str[0];
//   //  console.log(str);
//   let oddOne;
//   if (strLength % 2 === 1) oddOne = str.splice(str.length - 1, 1)[0].split('').reverse().join('');
//   let result = [];

//   while (str.length !== 1) {
//     str = str.map(word => word.split('').reverse().join(''));

//     for (let idx = 0; idx < str.length; idx += 2) {
//       result.push(str[idx] + str[idx + 1]);
//     }
//     str = result;
//     result = [];
//   }
//   // console.log(str);
//   //console.log(strLength);
//   // str = str.map(word => word.split('').reverse().join(''));
//   return strLength % 2 === 1 ? str[0].split('').reverse().join('') + oddOne : str[0];
// }

function reverse_and_combine_text(str) {
  str = str.split(' ');
  while (str.length !== 1) {
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].split('').reverse().join('');
    }
    let str2 = [];
    if (str.length % 2) str.push('');
    for (let i = 0; i < str.length; i += 2) {
      str2.push(str[i] + str[i + 1]);
    }
    str = str2;
  }
  return str[0];
}

console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44") === "trzwqfdstrteettr45hh4325543544hjhjh21lllll"); // "trzwqfdstrteettr45hh4325543544hjhjh21lllll"
console.log(reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt") === "gffds432243fdsfdseewttf"); // "gffds432243fdsfdseewttf"
console.log(reverse_and_combine_text("abc def") === "cbafed"); // "cbafed"
console.log(reverse_and_combine_text("abc def ghi jkl") === "defabcjklghi"); // "defabcjklghi"
console.log(reverse_and_combine_text("dfghrtcbafed") === "dfghrtcbafed"); // "dfghrtcbafed"