// const a = '9007199254740991'
// const b = '1234567899999999999'
// // 大整数相加
// function addLarge (a, b) {
//   const max = Math.max(a.length, b.length)
//   a = a.padStart(max, '0')
//   b = b.padStart(max, '0')
//   let curr = 0
//   let flag = 0
//   let sum = ''
//   for (let i = max - 1; i >= 0; i--) {
//     curr = parseInt(a[i]) + parseInt(b[i]) + flag
//     flag = Math.floor(curr / 10)
//     sum = curr % 10 + sum
//   }
//   if (flag === 1) {
//     sum = '1' + sum
//   }
//   return sum
// }
// console.log(addLarge(a, b))

// // 自定义instanceof 行为Symbol.hasInstance
// class MyString {
//   static [Symbol.hasInstance] (str) {
//     return typeof str === 'string'
//   }
// }

// console.log('453453' instanceof MyString)

// // 手写instanceof
// function myInstanceof (left, right) {
//   if (typeof left !== 'object' || left === null) return false
//   let leftProto = Object.getPrototypeOf(left)
//   while(true) {
//     if (leftProto === null) return false
//     if (leftProto === right.prototype) return true
//     leftProto = Object.getPrototypeOf(leftProto)
//   }
// }
// const MyCar = function () {
// }
// const myCar = new MyCar()
// console.log(myInstanceof(myCar, MyCar)) // true

// function cloneDeep(value) {
//   if (typeof value !== 'object' || value === null) return value
//   let result = {}
//   if (Array.isArray(value)) {
//     result = []
//   }
//   for (const key in value) {
//     if (value.hasOwnProperty(key)) {
//       if(typeof value[key] === 'object') {
//         result[key] = cloneDeep(value[key])
//       } else {
//         result[key] = value[key]
//       }
//     }
//   }
//   return result
// }

// const x = {
//   num: 1,
//   arr: [1, 3],
//   b: {
//     age: 2
//   }
// }

// const y = cloneDeep(x)

// y.b.age = 4
// y.arr[0] = 10
// console.log(x, y, 10)
// function printTree(list) {
//   // 请实现此方法
//   let root
//   let remain = []
//   for (let i = 0; i < list.length; i++) {
//     list[i].children = []
//     if (list[i].parentId === 0) {
//       root = list[i]
//     } else {
//       remain.push(list[i])
//     }
//   }
//   // 开始构造多叉树
//   for(let i = 0; i < remain.length; i++){
//     addNode(root, remain[i])
//   }
//   function addNode(root, node) {
//     if (!root) return false
//     if (root.id === node.parentId) {
//       root.children.push(node)
//     }
//     for (let child of root.children) {
//       addNode(child, node)
//     }
//   }
//   console.log(root)
//   // 开始递归打印
//   print(root, 0)
//   function print(root, strLength) {
//     console.log(' '.repeat(strLength) + root.name)
//     for (let child of root.children) {
//       print(child, strLength + root.name.length)
//     }
//   }
// }
const list = [
  { id: 1001, parentId: 0, name: 'AA' },
  { id: 1002, parentId: 1001, name: 'BB' },
  { id: 1003, parentId: 1001, name: 'CC' },
  { id: 1004, parentId: 1003, name: 'DD' },
  { id: 1005, parentId: 1003, name: 'EE' },
  { id: 1006, parentId: 1002, name: 'FF' },
  { id: 1007, parentId: 1002, name: 'GG' },
  { id: 1008, parentId: 1004, name: 'HH' },
  { id: 1009, parentId: 1005, name: 'II' },
]
printTree(list)

function printTree(list) {
  let root
  let remain = []
  for (let i = 0; i < list.length; i++) {
    list[i].children = []
    if (list[i].parentId === 0) {
      root = list[i]
    } else {
      remain.push(list[i])
    }
  }
  function addNode(root, node) {
    if (!root) return
    if (root.id === node.parentId) {
      root.children.push(node)
      return
    }
    for (let i = 0; i < root.children.length; i++) {
      addNode(root.children[i], node)
    }
    return
  }
  if (remain.length !== 0) {
    remain.forEach((item) => {
      addNode(root, item)
    })
  }
  print(root, 0)
  function print(root, strLength) {
    // console.log(root)
    console.log(' '.repeat(strLength) + root.name)
    for (let i = 0; i < root.children.length; i++) {
      print(root.children[i], strLength +  root.name.length)
    }
  }
}

function format(num) {
  let [a, b] = JSON.stringify(num).split('.')
  let p = f1(a)
  let q = f2(b)
  if (!q) return p
  return p + '.' + q
}

function f1(str) {
  if (str === '0') return str
  const arr = str.split('')
  let flag = 0
  for (let i = arr.length; i > 0; i--) {
    if (flag === 3) {
      arr.splice(i, 0, ',')
      flag = 1
      continue
    }
    flag++
  }
  return arr.join('')
}
function f2(str) {
  if (!str.length || str === '0') return str
  const arr = str.split('')
  let flag = 0
  for (let i = 0; i < arr.length; i++) {
    if (flag === 3) {
      arr.splice(i, 0, ',')
      flag = 0
      continue
    }
    flag++
  }
  return arr.join('')
}