// Check whether a number is a Strong Number or not.

function strongN(n) {
    let sum = 0;
    let original = n;

    while(n > 0) {
        let digit = n % 10;
        let fact = 1;

        for(let i = 1; i <= digit; i++) {
            fact *= i;
        }

        sum += fact;
        n = Math.floor(n / 10);
    }

    return sum === original ? "Yes, strong number!" : "No, not a strong number!";
}

console.log(strongN(145));
console.log(strongN(125));