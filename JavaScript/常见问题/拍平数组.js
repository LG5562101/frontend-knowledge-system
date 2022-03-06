function flat(arr) {
  const isDeep = res.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }
  // 拍平
  const res = Array.prototype.concat([], arr)
  return flat(res)
}

