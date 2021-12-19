let numbers = [1, 2, 3];
numbers[6] = 5; // [1, 2, 3, <empty item>, <empty item>, <empty item>, 5]
// It will not raise an error
console.log(numbers[4]); // undefined
console.log(numbers);