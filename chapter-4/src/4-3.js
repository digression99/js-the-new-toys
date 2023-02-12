// full rewrite es6

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
      throw new Error('Invalid rgb color string', s)
    }

    this.r = parseInt(match[1], 10)
    this.g = parseInt(match[2], 10)
    this.b = parseInt(match[3], 10)
  }

  toString() {
    return this.rgb
  }

  static fromCSS(css) {
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css)

    if (!match) {
      throw new Error('Invalid css code :', css)
    }

    let vals = match[1]

    if (vals.length === 3) {
      const [r, g, b] = vals
      vals = `${r}${r}${g}${g}${b}${b}`
    }

    return new this(
      parseInt(vals.substring(0, 2), 16),
      parseInt(vals.substring(2, 4), 16),
      parseInt(vals.substring(4, 6), 16)
    )
  }
}

let c = new Color(30, 144, 255)
console.log(String(c))

c = Color.fromCSS('00A')
console.log(String(c))
