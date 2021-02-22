
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = []
  if (!matrix) return []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j <= matrix.length; j++) {
        arr.push(matrix[i][j])
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        arr.push(matrix[i][j])
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == typeof undefined) arr.splice(i, 1)
    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[j] == typeof undefined) arr.splice(j, 1)
    }
  }
  return arr;
}

