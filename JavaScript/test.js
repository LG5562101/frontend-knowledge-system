const a = '9007199254740991'
const b = '1234567899999999999'
// 大整数相加
function addLarge (a, b) {
  const max = Math.max(a.length, b.length)
  a = a.padStart(max, '0')
  b = b.padStart(max, '0')
  let curr = 0
  let flag = 0
  let sum = ''
  for (let i = max - 1; i >= 0; i--) {
    curr = parseInt(a[i]) + parseInt(b[i]) + flag
    flag = Math.floor(curr / 10)
    sum = curr % 10 + sum
  }
  if (flag === 1) {
    sum = '1' + sum
  }
  return sum
}
console.log(addLarge(a, b))

// 自定义instanceof 行为Symbol.hasInstance
class MyString {
  static [Symbol.hasInstance] (str) {
    return typeof str === 'string'
  }
}

console.log('453453' instanceof MyString)

// 手写instanceof
function myInstanceof (left, right) {
  if (typeof left !== 'object' || left === null) return false
  let leftProto = Object.getPrototypeOf(left)
  while(true) {
    if (leftProto === null) return false
    if (leftProto === right.prototype) return true
    leftProto = Object.getPrototypeOf(leftProto)
  }
}
const MyCar = function () {
}
const myCar = new MyCar()
console.log(myInstanceof(myCar, MyCar)) // true

function cloneDeep(value) {
  if (typeof value !== 'object' || value === null) return value
  let result = {}
  if (Array.isArray(value)) {
    result = []
  }
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      if(typeof value[key] === 'object') {
        result[key] = cloneDeep(value[key])
      } else {
        result[key] = value[key]
      }
    }
  }
  return result
}

const x = {
  num: 1,
  arr: [1, 3],
  b: {
    age: 2
  }
}

const y = cloneDeep(x)

y.b.age = 4
y.arr[0] = 10
console.log(x, y, 10)