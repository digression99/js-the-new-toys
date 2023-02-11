// function name

function foo() { }

console.log(foo.name)

const f = function bar() { }
console.log(f.name)

const foo2 = function() { }
console.log(foo2.name)

let foo3;
foo3 = function() { }

console.log(foo3.name)

let foo4 = () => { }
console.log(foo4.name)

const obj = {
  foo: function() { }
}

console.log(obj.foo.name)

  ; (function(callback = function() { }) {
    console.log(callback.name)
  })()

// no name, to prevent hacking from the following code
// cache[getUserSecret(user)] = function() {}
const obj2 = {}
obj.foo = function() { }
console.log(obj.foo.name)
