function minimum(num1, num2){
  if (num1 < num2) return num1
  else return num2
}

// console.log(minimum(32, 23))

// function isEven(n){
//   if(n <= 0) return true
//   if(n === 1) return false
//   return isEven(n-2)
// }

// function isEven(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(-33))

function countB(string){
  return countChar(string, "B")
}

function countChar(string, char){
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char){
      count++;
    }
  }
  return count
}

console.log(countChar('Jooosie', 'o'))