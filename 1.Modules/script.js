/* const lib = require('./utils/lib1');

console.log(lib.sum(10,20));
console.log (lib.subtract(100,20));

console.log("Inside lib1"); */
const lib2 = require('/lib');
console.log("Running lib2");
function subtract(a,b) {
    return a-b;
}
let b = 1;
module.exports.sum