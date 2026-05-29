// Find the missing number in an array.

function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    let missingVal = expectedSum - actualSum;
    return missingVal;
}

console.log(findMissingNumber([1, 2, 4]));


