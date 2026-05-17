// Find the second smallest number in array

function secSmallestNum(arr) {
    let min = Infinity;
    let secMin = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            secMin = min;
            min = arr[i];
        } else {
            if(arr[i] < secMin && arr[i] > min) {
                secMin = arr[i]
            }
        }
    }
    return secMin;
}

console.log(secSmallestNum([2, 4, 6]));