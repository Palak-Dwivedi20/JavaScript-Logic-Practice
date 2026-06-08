// Toggle Case Of String.


function toggleCase(str) {

    let result = "";

    for(let char of str) {
        if(char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

console.log(toggleCase("Hello World"));
console.log(toggleCase("JaVaScRiPt"));

