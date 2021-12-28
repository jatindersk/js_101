let logInBox = text => {
  console.log(`+${'-'.repeat((text.length + 2))}+`);
  console.log(`|${' '.repeat((text.length + 2))}|`);
  console.log(`| ${text} |`);
  console.log(`|${' '.repeat((text.length + 2))}|`);
  console.log(`+${'-'.repeat((text.length + 2))}+`);
};

logInBox('To boldly go where no one has gone before.');
logInBox('');