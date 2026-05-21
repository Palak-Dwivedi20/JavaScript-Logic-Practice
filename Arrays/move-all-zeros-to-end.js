// Move all zeros to the end of the array.

function moveAllZerosToEnd(arr) {
    let newArr = [];
    let countZero = 0;

    for(let i = 0; i <arr.length; i++) {
        if(arr[i] !== 0) {
            newArr.push(arr[i])
        } else {
            countZero++;
        }
    }

    for(let i = 0; i < countZero; i++) {
        newArr.push(0);
    }

    return newArr;
}

console.log(moveAllZerosToEnd([1, 0, 2, 0, 4, 0]))