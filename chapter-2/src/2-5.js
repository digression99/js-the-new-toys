
function closuresInLoopsProblem() {
  for (var counter = 1; counter <= 3; ++counter) {
    setTimeout(function() {
      console.log(counter)
    }, 10)
  }
}

// closuresInLoopsProblem()

function closuresInLoopsES5() {
  for (var counter = 1; counter <= 3; ++counter) {
    (function(value) {
      setTimeout(function() {
        console.log(value)
      }, 10)
    })(counter)
  }
}

// closuresInLoopsES5()

function closuresInLoopsWithLet() {
  for (let counter = 1; counter <= 3; ++counter) {
    setTimeout(function() {
      console.log(counter)
    }, 10)
  }
}

closuresInLoopsWithLet()
