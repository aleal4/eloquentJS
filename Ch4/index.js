function range(start, end, step = start < end ? 1 : -1){
  let newArr = []

  if (step < 0){
    for (let i = start; i <= end; i+= step){
      newArr.push(i)
    } 
  } else {
    for (let i = start; i >= end; i+= step){
      newArr.push(i)
    }
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