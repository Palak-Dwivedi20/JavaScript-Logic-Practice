// Capitalize the first letter of each word in a sentence.

function capitalizeFirstLetterOfEachWord(str) {
    let word = str.split(" ");
    let result = [];


    for(let i = 0; i < word.length; i++) {
        let words = word[i];
        let firstWord = words[0].toUpperCase();
        let otherWords = words.substring(1).toLowerCase();
        let capitalizeStr = firstWord + otherWords;
        result.push(capitalizeStr)
    }

    return result.join(" ");
}

console.log(capitalizeFirstLetterOfEachWord("i love javascript"));



