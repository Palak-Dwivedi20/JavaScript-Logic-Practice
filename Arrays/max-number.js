// Find maximum number in an array

function maxNum(arr) {
    let maxNum = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }

    return maxNum;
};

console.log(maxNum([9, 4, 15, 3]));