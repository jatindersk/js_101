function list(names) {
  let result = '';
  let str;
  let filler = ', ';

  if (names.length === 1) return names[0].name;

  names.forEach((obj, idx) => {
    str = obj.name;

    if (idx === names.length - 2) filler = ' & ';
    result = result + str + filler;
  });

  return result.slice(0, result.length - 3);
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }])); // 'Bart, Lisa, Maggie, Homer & Marge',"Must work with many names"

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])); // 'Bart, Lisa & Maggie', "Must work with many names"

console.log(list([{name: 'Bart'},{name: 'Lisa'}])); // 'Bart & Lisa', "Must work with two names"

console.log(list([{name: 'Bart'}])); // 'Bart', "Wrong output for a single name"
console.log(list([])); // '', "Must work with no names"