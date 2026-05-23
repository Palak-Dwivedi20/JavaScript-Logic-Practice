function longestWord(str) {
    let words = str.split(" ");
    let longWord = "";

    for(let i = 0; i < words.length; i++) {
        if(words[i].length > longWord.length) {
            longWord = words[i];
        }
    }

    return longWord;
}

console.log(longestWord("I Love JavaScript"));