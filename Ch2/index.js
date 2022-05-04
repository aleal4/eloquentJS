let num = 1
let hash = '#'
while (num <= 7){
  // console.log(hash)
  hash += '#'
  num++
}

for (let i = 1; i <= 100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  } else if (i % 5 === 0){
    console.log('Buzz')
  } else if (i % 3 === 0){
    console.log('Fizz')
  }
}
