let getGrade = (score1, score2, score3) => {
  let mean = (score1 + score2 + score3) / 3;
  console.log(mean);
  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (mean >= 80 && mean < 90) {
    return 'B';
  } else if (mean >= 70 && mean < 80) {
    return 'C';
  } else if (mean >= 60 && mean < 70) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(95, 90, 93));    // "A"
