function greaterThan(n) {
  return function (m) {
    m > n
  } 
}

let greaterThan10 = greaterThan(10)
// console.log(greaterThan10(11))

function noisy(f){
  return (...args) => {
    console.log('calling with', args)
    let result = f(...args)
    console.log('called with', args, ", returned", result)
    return result
  }
}

// noisy(Math.min)(3, 2, 1)

// function unless(test, then){
//   if (!test) then()
// }

// // assumes repeat function exists
// repeat(3, n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even")
//   })
// })

let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((flat, current) => flat.concat(current), []))

function loop(start, test, update, body){
  for (let value = start; test(value); value= update(value)){
    body(value)
  }
}
loop(3, n => n > 0, n => n - 1, console.log)
