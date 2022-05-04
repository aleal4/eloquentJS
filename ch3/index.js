function minimum(num1, num2){
  if (num1 < num2) return num1
  else return num2
}

// console.log(minimum(32, 23))

function isEven(n){
  if(n <= 0) return true
  if(n === 1) return false
  return isEven(n-2)
}

console.log(isEven(33))