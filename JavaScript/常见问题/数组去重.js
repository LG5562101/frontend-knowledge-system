// 传统循环
// function unique(arr) {
//   const res = []
//   arr.forEach(item => {
//     if (res.indexOf(item) < 0) {
//       res.push(item)
//     }
//   })
//   return res
// }
// const res = unique([1, 3, 2, 3, 4, 5, 6, 3])
// console.log(res)

// 使用set
// function unique(arr) {
//   const set = new Set(arr)
//   return [...set]
// }
// const res = unique([1, 3, 2, 3, 4, 5, 6, 3])
// console.log(res)