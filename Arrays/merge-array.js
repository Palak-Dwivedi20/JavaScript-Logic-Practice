// Merge two arrays

function mergeArr(arr1, arr2) {
    let newArr = [...arr1];

    for(let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    }

    return newArr;
};

console.log(mergeArr([1, 2, 3], [4, 5, 6]));