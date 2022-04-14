function inArray(array1,array2) {

}

let a1;
let a2;

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2)); // ["live", "strong"]

a1 = ["live", "strong", "arp"];
console.log(inArray(a1, a2)); // ["arp", "live", "strong"]

a1 = ["tarp", "mice", "bull"];
console.log(inArray(a1, a2)); // []