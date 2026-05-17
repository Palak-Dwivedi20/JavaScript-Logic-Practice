// Find the first non-repeating character in a string

function findNonRepeatingChar(str) {

    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
};

console.log(findNonRepeatingChar("aabbcdde"));