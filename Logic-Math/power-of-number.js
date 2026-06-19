// Calculate the Power of a Number in JavaScript?

// Method 1: Exponent Operator

function power(base, exponent) {
    return base ** exponent;
}

console.log(power(2, 3));


// Method 2: Using Loop

function powerLoop(base, exponent) {
    let result = 1;
    for(let i = 1; i <= exponent; i++) {
        result = result * base;
    }
    return result;
}

console.log(powerLoop(2, 3));




// // Method 3: Using Math.pow()

function powerOf2(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(powerOf2(2, 3));