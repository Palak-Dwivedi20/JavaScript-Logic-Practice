// Method 1 - Using loop 

function checkPalindrome(str) {
    str = str.toLowerCase();
    let original = str;
    let rev = "";

    for(let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    return rev === original ? "Yes, Palindrome!" : "Not, Palindrome!";
}

console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("Palak"));


// Method 2 - Using split/reverse/join

function checkPalindrome2(str) {
    str = str.toLowerCase();
    let original = str;

    let reversedStr = str.split("").reverse().join("");

    return original === reversedStr 
    ? "Yes, Palindrome!" 
    : "Not, Palindrome!";
}

console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("Palak"));