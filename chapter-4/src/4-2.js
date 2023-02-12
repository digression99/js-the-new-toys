// prevent Color from calling without new in es5

function Color(r, g, b) {
  console.log('this is :', this)
  if (!(this instanceof Color)) {
    throw new TypeError('Class constructor Color cannot be invoked without new')
  }
}

// const c = Color(1, 2, 3)
const c = new Color(1, 2, 3)


