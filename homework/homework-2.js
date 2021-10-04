//Exercise 2
function getArrayDepth(ry){
    let levels = 1;
    let prev_length = 1;
    let curr_length = ry.length;

    while(curr_length > prev_length){
    ry = ry.flat();
    prev_length = curr_length
    curr_length = ry.length;
    levels ++
    }
    return levels;
  }

function flattenElements(arr){
    let flattenRy = arr.flat(getArrayDepth(arr))
    return flattenRy
  }

let testRy = ['a', ['b', 2], 3, null, [[4], ['c']]]

console.log(testRy);
console.log(getArrayDepth(testRy))
console.log(flattenElements(testRy));