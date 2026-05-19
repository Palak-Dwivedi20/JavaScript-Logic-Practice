// Remove duplicate words from a sentence.

function removeDuplicateWords(str) {
    let words = str.split(" ");
    let result = [];

    for(let i = 0; i < words.length; i++) {
        if(!result.includes(words[i])) {
            result.push(words[i]);
        }
    }
    return result.join(" ");
}

console.log(removeDuplicateWords("I love js I love coding"));