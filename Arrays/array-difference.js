// Find the difference between two arrays.



function findDifference(arr1, arr2) {
    let newArr= [];

    for(let i = 0; i < arr1.length; i++) {
        if(!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}

console.log(findDifference([10, 20, 30], [20, 40]));