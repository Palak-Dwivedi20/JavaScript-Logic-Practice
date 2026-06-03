// Check String Contains Only Digits
// Input: "12345"
// Output: true

// Input: "12a45"
// Output: false


function onlyDigits(str) {
    
    for(let i = 0; i < str.length; i++) {
        if(str[i] < "0" || str[i] > "9") {
            return false;
        }
    }

    return true;
}


console.log(onlyDigits("12345")); 
console.log(onlyDigits("12a45")); 