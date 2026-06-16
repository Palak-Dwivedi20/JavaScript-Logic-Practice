//  Armstrong Number problem


function isArmstrong(num) {
    let original = num;
    let sum = 0;

    while(num > 0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }

    return sum === original;
}

console.log(isArmstrong(153));