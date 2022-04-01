let halvsies = arr => {
  let result = [];
  let len = arr.length;

  if (len % 2 === 0) {
    result.push(arr.slice(0, Math.floor(len / 2)));
    result.push(arr.slice(Math.floor(len / 2)));
  } else {
    result.push(arr.slice(0, Math.ceil(len / 2)));
    result.push(arr.slice(Math.ceil(len / 2)));
  }

  console.log(result);
};

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]