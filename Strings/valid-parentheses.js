// Valid Parentheses using Stack

function isValid(str) {
    let stack = [];

    let pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for(let char of str) {

        if(char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {

            let top = stack.pop();

            if(top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("([{}])"));