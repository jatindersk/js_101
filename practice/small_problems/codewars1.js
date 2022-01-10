function validatePIN(pin) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // validate length 4 or 6
  if (pin.length === 4 || pin.length === 6) {
    if (parseInt(pin, 10) === 0) {
      console.log(`0 use case`);
      return true;
    }
    // verify whether each character is a number
    for (let idx = 0; idx < pin.length; idx += 1) {
      if (!DIGITS.includes(pin[idx])) {
        console.log(`DIGITS ${DIGITS.includes(pin[idx])}...char: ${pin[idx]}`);
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(validatePIN('1234'));