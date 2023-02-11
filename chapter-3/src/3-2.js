
let x = 10

// the parameter scope is inside the called function.
function example(value = x) { // already 10 is determined.
  let x = 20
  console.log('value is ', value)
}

example(30)

// the parameter list has its own scope by ordering.
function example2(a = x, b = a, c = 0 /*y*/) {
  console.log(a, b, c)
}

example2()
