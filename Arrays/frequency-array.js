// Find frequency of each element in an array

function findArrayFrequency(arr) {
    let freq = {};

    for(let i = 0; i < arr.length; i++) {
        if(freq[arr[i]]) {
            freq[arr[i]] = freq[arr[i]] + 1;
        } else {
            freq[arr[i]] = 1;
        }
    }

    return freq;
}

console.log(findArrayFrequency(["p", "p", "a", "a", "b", "c", "c", "c"]));