// Check if two strings are anagrams

function checkAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length) {
        return "Not, an anagram!";
    }

    let freq = {};

    for(char of str1) {
        if(freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }

    for(char of str2) {
        if(freq[char]) {
            freq[char]--;
        } else {
            return "Not, an anagram!";
        }
    }

    for(let key in freq) {
        if(freq[key] !== 0) {
            return "Not, an anagram!";
        }
    }

    return "Yes, anagram!";
}

console.log(checkAnagram("Listen", "Silent"));
console.log(checkAnagram("Care", "Dare"));