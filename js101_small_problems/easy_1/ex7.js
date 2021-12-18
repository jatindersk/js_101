let shortLongShort = (string1, string2) => {
  let str1Len = string1.length;
  let str2Len = string2.length;

  return (str1Len < str2Len) ? (string1 + string2 + string1 ) :
    (string2 + string1 + string2);
};

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"