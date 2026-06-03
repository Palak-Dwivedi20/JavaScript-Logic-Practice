//  Two Sum


function twoSum(arr, target) {
   
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(twoSum([2, 7, 15, 11], 9))