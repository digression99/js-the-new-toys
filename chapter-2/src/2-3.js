
let answer;
function hoisting() {
  answer = 42 // cannot access 'answer' before initialization
  console.log(answer)
  let answer
}

function temporalExample() {
  const f = () => {
    console.log(v)
  }
  let v = 42
  f()
}

function blockExample(str) {
  let p = "prefix"
  if (str) {
    p = p.toUpperCase() // ReferenceError: cannot access 'p' before initialization
    str = str.toUpperCase()

    let p = str.indexOf('x')
    if (p != -1) {
      str = str.substring(0, p)
    }
  }

  return p + str
}

blockExample('blabla')
