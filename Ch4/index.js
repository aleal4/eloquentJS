function range(start, end, step = start < end ? 1 : -1){
  let newArr = []

  if (step > 0){
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

// console.log(range(1, 10, 6))

function reverseArray(array){
  newArr = []
  for (let i = array.length - 1; i >= 0; i--){
    newArr.push(array[i])
  }
  return newArr
}

function reverseArrayInPlace(){
  
}