// Count positive and negative numbers in an array.


function countPositiveAndNegative(arr) {
    let countPositiveN = 0;
    let countNegeativeN = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            countPositiveN++
        } else {
            if(arr[i] < 0) {
            countNegeativeN++;
        }
        }
    }

    return {
        Positive: countPositiveN,
        Negative: countNegeativeN
    }
}

console.log(countPositiveAndNegative([-2, 5, -7, 9, 0, -1]))