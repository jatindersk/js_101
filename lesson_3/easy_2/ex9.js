let title = "Flintstone Family Members";

// Approach 1:
let padding = Math.floor((40 - (title.length)) / 2);
title = title.padStart(padding + title.length, ' ');
console.log(title);