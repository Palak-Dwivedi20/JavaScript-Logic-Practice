// Find the word with the highest frequency in a sentence.


function findHighestFrequency(str) {
    str = str.toLowerCase();
    let words = str.split(" ");
    let freq = {};

    for(word of words) {
        if(freq[word]) {
            freq[word] = freq[word] + 1;
        } else {
            freq[word] = 1
        }
    }

    let maxCount = 0;
    let maxWord = "";

    for(let key in freq) {
        if(freq[key] >= maxCount) {
            maxCount = freq[key];
            maxWord = key;
        }
    }
    
    return maxWord;
}

console.log(findHighestFrequency("I love js and I love coding"))