// ['ant', 'bear'].map(elem => {
//   if (elem.length > 3) {
//     return elem;
//   }
// }); // [ undefined, 'bear' ]

// map method returns an array of two undefined elements.
// This is because the callback function does not return
// any value explicity. As all JavaScript functions
// return undefined implicity, the map method here will
// return undefined element one for each element of the caller
// array.