// Move all zeros to the end of the array.

function moveAllZerosToEnd(arr) {
    let newArr = [];
    let countZero = 0;

    for(let i = 0; i < arr.length; i++) {
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

console.log(moveAllZerosToEnd([1, 0, 2, 0, 4, 0]));


function moveAllzero(arr) {
    let newArr = [];
    let zeroCount = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            newArr.push(arr[i]);
        } else {
            zeroCount++;
        }
    }

    for(let i = 0; i < zeroCount; i++) {
        newArr.push(0);
    }

    return newArr;
}

console.log(moveAllzero([0, 2, 4, 0, 5, 0, 0, 10, 15, 3]));
