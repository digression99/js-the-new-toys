// subclass

class Color {
  constructor(r = 0, g = 0, b = 0) {
    this.r = r
    this.g = g
    this.b = b
  }

  get rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  set rgb(value) {
    let s = String(value)

    let match = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(
      s.replace(/\s/g, "")
    )

    if (!match) {
      throw new Error(`Invalid rgb color string '${s}'`)
    }

    this.r = parseInt(match[1], 10)
    this.g = parseInt(match[2], 10)
    this.b = parseInt(match[3], 10)
  }

  toString() {
    return this.rgb
  }

  static fromCSS(css) {
    const match =
      /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css)

    if (!match) {
      throw new Error('Invalid CSS Code:', css)
    }

    let vals = match[1]

    if (vals.length === 3) {
      const [r, g, b] = vals
      vals = `${r}${r}${g}${g}${b}${b}`
    }

    const ctor = this?.[Symbol.species] || Color
    return new ctor(
      parseInt(vals.substring(0, 2), 16),
      parseInt(vals.substring(2, 4), 16),
      parseInt(vals.substring(4, 6), 16),
    )
  }

  // for subclass
  brightness() {
    return Math.sqrt(
      (this.r * this.r * 0.299) +
      (this.g * this.g * 0.587) +
      (this.b * this.b * 0.114)
    )
  }

  static get [Symbol.species]() { return this }

  halfBright() {
    // const ctor = this.constructor || Color
    const ctor = this?.constructor?.[Symbol.species] || Color
    return new ctor(
      Math.round(this.r / 2),
      Math.round(this.g / 2),
      Math.round(this.b / 2)
    )
  }
}

class ColorWithAlpha extends Color {
  constructor(r = 0, g = 0, b = 0, a = 1) {
    // Error: Must call super constructor in derived class before 
    // accessing 'this' or returning from derived constructor
    // this.a = a
    super(r, g, b)
    this.a = a
  }

  brightness(bgColor) {
    let result = super.brightness() * this.a

    if (bgColor && this.a !== 1) {
      result = (result + (bgColor.brightness() * (1 - this.a))) / 2
    }

    return result
  }

  toString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }

  static fromCSS(css, a = 1) {
    const result = super.fromCSS(css)
    result.a = a
    return result
  }
}

const ca = new ColorWithAlpha(169, 169, 169)
console.log(String(ca))
console.log(ca.brightness())
ca.a = 0.5
console.log(String(ca))
console.log(ca.brightness())

const blue = new ColorWithAlpha(0, 0, 255)
console.log(ca.brightness(blue))

