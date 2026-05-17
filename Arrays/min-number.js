// Find minimum number in an array

function minNumber(arr) {
    let minNum = arr[0];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minNum) {
            minNum = arr[i];
        }
    }

    return minNum;
};

console.log(minNumber([3, 10, 15, 8, 2]));