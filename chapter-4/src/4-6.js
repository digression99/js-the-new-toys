// using Symbol.species
class Base {
  constructor(data) {
    this.data = data
  }

  static get [Symbol.species]() {
    return this
  }

  static create(data) {
    console.log('create, ', this, Base)
    const ctor = this || Base
    return new ctor(data)
  }

  clone() {
    console.log('clone, ', this?.constructor?.[Symbol.species], Base)
    const ctor = this?.constructor?.[Symbol.species] || Base
    return new ctor(this.data)
  }
}

class Sub1 extends Base { }

class Sub2 extends Base {
  static get [Symbol.species]() {
    return Base
  }
}

const a = Base.create(1)
console.log(a.constructor.name)

const aClone = a.clone()
console.log(aClone.constructor.name)

const b = Sub1.create(2)
console.log(b.constructor.name)
const bClone = b.clone()
console.log(bClone.constructor.name)

const c = Sub2.create(3)
console.log(c.constructor.name)
const d = new Sub2(4)
console.log(d.constructor.name)
console.log(d.data)

const dClone = d.clone()
console.log(dClone.constructor.name) // Base
console.log(dClone.data)
