//  Rotate Array by K Positions.

function rotateArr(arr, k) {
    let first = arr.slice(-k);
    let second = arr.slice(0, arr.length - k);
    let rotate = first.concat(second) ;
    return rotate;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2));


function findUniqueElements(arr) {
    let uniqueVal = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            uniqueVal.push(arr[i]);
        }
    }

    return uniqueVal;
}

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5]))


