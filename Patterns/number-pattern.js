// Number Pattern 

function numberPattern() {
    for(let i = 1; i <= 5; i++) {
        let nums = "";

        for(let j = 1; j <= 5 - i; j++) {
            nums += " ";
        }

        for(let k = 1; k <= i; k++) {
            nums += k;
        }
        console.log(nums);
    }
}

numberPattern();