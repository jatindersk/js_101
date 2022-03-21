//  it should return me to the starting point
//  it should take exactly ten minutes

function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  return returnsToStaringPoint(walk);
}

function returnsToStaringPoint(arr) {
  let oppPairs = { n: 's', s: 'n', e: 'w', w: 'e' };
  let dirLeft = arr.reduce((acc, dir) => {
    if (acc[acc.length - 1] === oppPairs[dir]) acc.pop();
    else acc.push(dir);
    return acc;
  }, []);
  return dirLeft.length === 0;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // 'should return true'
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])); // 'should return false'
console.log(isValidWalk(['w'])); // 'should return false'
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // 'should return false'