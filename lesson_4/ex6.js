let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5); // [1, 1, 1, 1, 1]

// We can find about it's working by reading it's
// documentation on mdn website. Also, running the code in node
// is a handy way to test the method.

// fill method changes the elements of an array with a
// static value. It accepts three arguments. The first
// argument is optional and specifies the value to fill
// the array with. The second argument is optional and
// specifies the start index (inclusive). The third
// argument is optional as well and specifies the
// end index (exclusive).

// Yes, fill is a desctructive method. It permanently alters
// the caller array and returns it.