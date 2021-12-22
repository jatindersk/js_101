[1, 2, 3].filter(num => 'hi'); // [1, 2, 3]

// As the return value of callback function is always a truthy value
// 'hi' in this case. Hence, the array returned by filter method
// consists of all the elements of the original array.