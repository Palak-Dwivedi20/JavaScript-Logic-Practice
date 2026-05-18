// Check whether a number is Prime Number or not.

function primeN(n) {
    if(n <= 1) {
        return false;
    }

    for(let i = 2; i <= (Math.sqrt(n)); i++) {
        if(n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(primeN(79));
console.log(primeN(10));