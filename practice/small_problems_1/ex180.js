function solution(number) {
  let result = 0;
  let num = 2;

  while (true) {
    if (num % 3 === 0 || num % 5 === 0) {
      result += num;
    }
    num += 1;
    if (num >= number) break;
  }
  return result;
}

console.log(solution(10)); // 23