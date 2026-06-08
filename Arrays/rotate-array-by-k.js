//  Rotate Array by K Positions.

function rotateArr(arr, k) {
    let first = arr.slice(-k);
    let second = arr.slice(0, arr.length - k);
    let rotate = first.concat(second) ;
    return rotate;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2));