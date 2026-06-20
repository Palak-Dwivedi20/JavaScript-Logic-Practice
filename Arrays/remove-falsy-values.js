// Remove falsy Values from an array in JavaScript?


function removeFalsy(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeFalsy( [0, 1, false, 2, "", 3]));