
function example() {
  console.log('answer1', answer) // undefined
  answer = 42
  console.log('answer2', answer) // 42
  var answer = 67
}

example()
