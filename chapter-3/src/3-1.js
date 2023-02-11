const Doomed = () => { }
// const d = new Doomed() // TypeError: Doomed is not a constructor

// arrow function is lighter
// than the traditional function.
function traditional() { }
const traditionalFE = function traditionalFE() { }
const arrow = () => { }

console.log('prototype' in traditional) // true
console.log('prototype' in traditionalFE) // true
console.log('prototype' in arrow) // false
