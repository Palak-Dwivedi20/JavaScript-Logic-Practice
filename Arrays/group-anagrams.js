// Group words that are anagrams of each other

function groupAnagrams(arr) {
    let obj = {};

    for(let word of arr) {
        let key = word.split("").sort().join("");

        if(obj[key]) {
            obj[key].push(word);
        } else {
            obj[key] = [word];
        }
    }

    return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));