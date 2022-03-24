//  create a delted
//  create a loop which keeps looping as long as an element
//   got deleted in the string i.e deleted = true
//  if nothing got deleted then set deleted = false
//  return the updated string

function cleanString(str) {
  if (!str.includes('#')) return str;
  let deleted;
  let idx;
  str = str.split('');

  do {
    idx = str.indexOf('#');
    if (idx >= 0) {
      str.splice(idx - 1, 2);
      deleted = true;
    } else deleted = false;
  } while (deleted === true);
  return str.join('');
}

// console.log(cleanString('aop##')); // 'a'
// console.log(cleanString('abc#d##c')); // 'ac'
// console.log(cleanString('abc####d##c#')); // ''
// console.log(cleanString('#######')); // ''
// console.log(cleanString('')); // ''
// console.log(cleanString('abjd####jfk#gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'));
// expected: '6+yqw8hfklsd-=-f', actual : 'jfgdasd6+yqw8hfklsd-=-f'