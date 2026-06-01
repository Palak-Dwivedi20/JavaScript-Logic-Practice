// Find common elements between two arrays.

function findIntersection(arr1, arr2) {
    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(findIntersection([10, 20, 30], [20, 40, 50]));
console.log(findIntersection([1, 2], [3, 4]));


