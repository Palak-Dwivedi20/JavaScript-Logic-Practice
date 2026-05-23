

function vowelFinder(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowel = "";
    
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i].toLowerCase())) {
            vowel += str[i];
        }
    }

    return vowel;
}

console.log(vowelFinder("Palak"));