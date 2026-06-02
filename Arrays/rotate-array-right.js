// Rotate Array Right By 1

function rotateRight(arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5]));