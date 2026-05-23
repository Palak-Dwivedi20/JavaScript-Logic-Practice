function vowleCount(str) {
    let vowel = ["a", "e", "i", "o", "u"];
    let countVowel = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowel.includes(str[i].toLowerCase())) {
            countVowel++;
        }
    }

    return countVowel;
}

console.log(vowleCount("Palak"));
