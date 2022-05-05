function ranged (start, end){
  let newArr = []

  for (let i = start; i <= end; i++){
    newArr.push(i)
  }
  return newArr

}

console.log(ranged(3, 7))