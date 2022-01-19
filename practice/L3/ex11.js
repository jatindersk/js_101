function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (!dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) return false;
  }
  return true;
}

console.log(isDotSeparatedIpAddress('0.255.254.256'));
console.log(isDotSeparatedIpAddress('0.255.254'));
console.log(isDotSeparatedIpAddress('0.255.254.250.89'));
console.log(isDotSeparatedIpAddress('0.255.254.99'));