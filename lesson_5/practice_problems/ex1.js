let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => {
  a = Number(a);
  b = Number(b);

  return b - a;
});

console.log(arr);