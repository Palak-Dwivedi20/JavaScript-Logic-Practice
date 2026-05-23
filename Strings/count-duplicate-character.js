//

function countDuplicate(str) {
    let duplicateVal = {};
    let freq = {};

   for(let char of str) {
    if(freq[char]) {
        freq[char] = freq[char] + 1;
    } else {
        freq[char] = 1;
    }
   }

   for(let key in freq) {
    if(freq[key] > 1) {
        duplicateVal[key] = freq[key];
    }
   }

   return duplicateVal;
}

console.log(countDuplicate("aabbccd"));