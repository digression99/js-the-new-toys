
function jumpOut() {
  var a = [1, 2, 3]
  for (var i = 0; i < a.length; ++i) {
    var value = a[i]
    console.log(value)
  }

  console.log('Outside loop', value, i)
}

jumpOut()
