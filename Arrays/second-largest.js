// Find second largest number in an array

function secLargestN(arr) {
    let max =  -Infinity;
    let secMax = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secMax = max;
            max = arr[i];
        } else {
            if(arr[i] > secMax && arr[i] < max) {
                secMax = arr[i];
            }
        } 
    }

    return secMax;
}

console.log(secLargestN([4, 9, 6, 15]));