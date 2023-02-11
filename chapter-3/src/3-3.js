// es5 extend
// "arguments" in function can be bounded or modified
// on sloppy mode.

function extend(target) {
  var n, source;

  for (n = 1; n < arguments.length; ++n) {
    source = arguments[n];
    Object.keys(source).forEach(function(key) {
      target[key] = source[key];
    })
  }

  return target;
}

var obj = extend({}, { a: 1 }, { b: 2 })
console.log(obj);

// es2015 extend
function extend_new(target, ...sources) {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      target[key] = source[key]
    })
  })

  return target
}

const obj2 = extend_new({}, { a: 1 }, { b: 2 })

console.log(obj2)

// with arrow function
const extend_arrow = (target, ...sources) => {
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      target[key] = source[key]
    })
  })
  return target
}

const obj3 = extend({}, { a: 1 }, { b: 2 })
console.log(obj3)


