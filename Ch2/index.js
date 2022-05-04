// let num = 1
// let hash = '#'
// while (num <= 7){
//   // console.log(hash)
//   hash += '#'
//   num++
// }
// for (let line = '#'; line.length < 8; line += '#')
// console.log(line)

// for (let i = 1; i <= 100; i++){
//   if (i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz')
//   } else if (i % 5 === 0){
//     console.log('Buzz')
//   } else if (i % 3 === 0){
//     console.log('Fizz')
//   } else{
//     console.log(i)
//   }
// }

// for (let n= 1; n <= 100; n++){
//   let output = ''
//   if (n % 3 === 0) output += 'Fizz'
//   if (n % 5 === 0) output += 'Buzz'
//   console.log(output || n)
// }

size = 8
board = ''
for (let y = 0; y < size; y++){
  for (let x = 0; x < size; x++){
    if ((x+y)  % 2 === 0){
      board += '#'
    }  
    else {
      board += ' '
    }
  }
  board += '\n'
}

console.log(board)
