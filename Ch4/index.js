function range(start, end){
  let newArr = []

  for (let i = start; i <= end; i++){
    newArr.push(i)
  }
  return newArr
}

function sum(array){
  let total = 0
  for (let i = 0; i < array.length; i++){
    total += array[i]
  }
  return total
}

console.log(sum(range(1, 10)))