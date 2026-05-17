// Count even numbers in an array

function countEven(arr) {
    let countEven = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            countEven++;
        }
    }
    return countEven;
}

console.log(countEven([2, 4, 7, 10, 3, 5]));