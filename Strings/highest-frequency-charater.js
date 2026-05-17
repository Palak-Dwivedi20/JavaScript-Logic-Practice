// Find the highest frequency character in a string

function highestFrequencyChar(str) {
    let freq = {};
    let maxCount = 0;
    let maxChar = "";

    for(char of str) {
        if(freq[char]) {
            freq[char] = freq[char] + 1;
        } else {
            freq[char] = 1;
        }
    }

    for(let key in freq) {
        if(freq[key] > maxCount) {
            maxChar = key;
            maxCount = freq[key]
        }
    }

    return maxChar;
}

console.log(highestFrequencyChar("aabbbcc"))