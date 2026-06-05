//  Find All Pairs With Target Sum


function findAllPairsWithTargetSum(arr, target) {
    let pairs = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs
}

console.log(findAllPairsWithTargetSum([2, 7, 11, 15, 3, 6], 9));