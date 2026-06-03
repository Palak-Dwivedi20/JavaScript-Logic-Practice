// Rotate Array Left By 1


function rotateRight(arr) {
    let firstElement = arr.shift();
    arr.push(firstElement);
    return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5]));