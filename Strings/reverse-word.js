//  Reverse the words in a sentence.

function reverseWords(str) {
    let revStr = str.split(" ").reverse().join(" ");
    return revStr;
}

console.log(reverseWords("I love Javascript"));


