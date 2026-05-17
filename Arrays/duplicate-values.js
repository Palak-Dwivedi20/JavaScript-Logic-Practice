// // Find Duplicate Values

function duplicateValue(arr) {
    let duplicate = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !duplicate.includes(arr[i])) {
            duplicate.push(arr[i]);
        }
    }

    return duplicate;
};

console.log(duplicateValue([2, 2, 4, 8, 10, 2, 4, 10]));