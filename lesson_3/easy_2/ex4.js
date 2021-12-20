let famousWords = "seven years ago...";

// Approach 1:
famousWords = "Four score and " + famousWords;
console.log(famousWords);

// Approach 2:
"Four score and ".concat(famousWords);
console.log(famousWords);