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

function reverseArrayInPlace(array){
  for (let i = 0; i < Math.floor(array.length / 2); i++){
    // array[i], array[array.length - 1 - i] = array[array.length - 1 - i], array[i]
    let old = array[i] 
    array[i] = array[array.length - 1 -i]
    array[array.length - 1 -i] = old
  }
  return array
}

// console.log(reverseArrayInPlace([1,3,4,5,6,9]))

function arrayToList(array){
  let list = null;
  for(let i = array.length - 1; i >= 0; i--){
    list = {
      value: array[i], 
      rest: list
    }
  }
  return list
}

// console.log(arrayToList([1, 2, 3]))

function listToArray(list){
  let array = []

  while (list !== null){
    array.push(list.value)
    list = list.rest
  }

  // for (let node = list; node; node = node.rest){
  //   console.log(node)
  //   array.push(node.value)
  // }
  return array
}

// console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))

function prepend(value, list){
  return {value, rest: list}
}

function nth(list, n){
  if (!list) return undefined
  else if(n == 0) return list.value;
  else return nth(list.rest, n-1)
}

// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 2));


function deepEqual(valOne, valTwo){
  if (valOne === valTwo) return true

  if (valOne == null || typeof valOne != 'object' || valTwo == null || typeof valTwo != 'object') {
    return false
  }  

  let keysOne = Object.keys(valOne), keysTwo = Object.keys(valTwo)

  if (keysOne.length !== keysTwo.length) return false

  for (let key of keysOne){
    if (!keysTwo.includes(key) || !deepEqual(valOne[key], valTwo[key])) return false
  }

  return true

}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
