// // Find Common Characters In Two Strings.


function findCommonCharacters(str1, str2) {
    let result = [];

    for(let i = 0; i < str1.length; i++) {
        if(str2.includes(str1[i]) && !result.includes(str1[i])) {
            result.push(str1[i])
        }
    }

    return result.join("");
}

console.log(findCommonCharacters("abcdef", "bdxy"));