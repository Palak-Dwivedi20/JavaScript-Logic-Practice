// Disarium Number

// Disarium Number

function isDisarium(num) {
    let str = num.toString();
    let sum = 0;

    for(let i = 0; i < str.length; i++) {
        sum += Number(str[i]) ** (i + 1);
    }

    return sum === num;
}

console.log(isDisarium(135));