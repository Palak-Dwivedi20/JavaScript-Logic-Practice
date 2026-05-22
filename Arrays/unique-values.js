//Find unique values in an array

function findUniqueValues (arr) {
    let uniqueVal = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))  {
            uniqueVal.push(arr[i]);
        }
    }

    return uniqueVal;
}

console.log(findUniqueValues([1, 2, 2, 1, 4, 9, 4, 5]));


