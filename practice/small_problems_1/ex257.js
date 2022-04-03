function swapCase(str) {
  let char;
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    char = str[idx];
    char = char === char.toLowerCase() ?
      char.toUpperCase() : char.toLowerCase();
    result += char;
  }

  console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"