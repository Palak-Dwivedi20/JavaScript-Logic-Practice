// Find Largest Sum Pair In Array

function findLargestSumPair(arr) {
    let largest = 0;
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            sum = arr[i] + arr[j];

            if(sum > largest) {
                largest = sum;
            }
        }
    }

    return largest;

}

console.log(findLargestSumPair([10, 5, 8, 20, 15]))