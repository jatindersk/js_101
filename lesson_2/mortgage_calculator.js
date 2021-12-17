const READLINE = require('readline-sync');
const MESSAGES = require('./mortgage_calculator.json');

prompt('greet');

function messages(message) {
  return MESSAGES[message];
}

function prompt(key) {
  let message = messages(key);
  console.log(`*** ${message} ***`);
}

function isInvalidLoanAmt(value) {
  return value <= 0 || Number.isNaN(value);
}

function isInvalidIntRate(value) {
  return value <= 0 || Number.isNaN(value);
}

function isInvalidYears(value) {
  return value < 0 || Number.isNaN(value) || !Number.isInteger(value);
}

function isInvalidMonths(value) {
  return value < 0 || Number.isNaN(value) || !Number.isInteger(value);
}

while (true) {
  prompt('breakline');

  prompt(`loanAmount`);
  let loanAmt = Number(READLINE.question());

  while (isInvalidLoanAmt(loanAmt)) {
    prompt(`loanAmtError`);
    loanAmt = Number(READLINE.question());
  }

  prompt(`askAPR`);
  let annualIntRate = Number(READLINE.question()) / 100;

  while (isInvalidIntRate(annualIntRate)) {
    prompt(`intRateError`);
    annualIntRate = Number(READLINE.question()) / 100;
  }
  let monIntRate = (annualIntRate / 12);

  let totalDur;

  while (true) {
    prompt(`askYears`);
    let loanDurationYears = Number(READLINE.question());

    while (isInvalidYears(loanDurationYears)) {
      prompt(`invalidYrs`);
      loanDurationYears = Number(READLINE.question());
    }

    prompt(`askMonths`);
    let loanDurationMonths = Number(READLINE.question());
    while (isInvalidMonths(loanDurationMonths)) {
      prompt(`invalidMonths`);
      loanDurationMonths = Number(READLINE.question());
    }
    totalDur = (loanDurationYears * 12) + loanDurationMonths;

    if (totalDur) break;

    prompt(`invalidDur`);
  }

  let monPayment = loanAmt * (monIntRate / (1 - Math.pow((1 + monIntRate), (-totalDur))));

  console.log(`Your monthly payment is: $${monPayment.toFixed(2)}`);
  console.log(`Total of ${totalDur} payments amounting to: $${(monPayment * totalDur).toFixed(2)}`);
  console.log(`Total interest payed will be: $${((monPayment * totalDur) - loanAmt).toFixed(2)}`);

  prompt('calAgain');
  let answer = READLINE.question().toLowerCase();

  while (answer !== 'yes' && answer !== 'no') {
    prompt(`askAgain`);
    answer = READLINE.question().toLowerCase();
  }

  if (answer === 'no') {
    prompt(`thanks`);
    break;
  }
  console.clear();
}