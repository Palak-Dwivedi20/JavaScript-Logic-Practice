// Decreasing Star Pattern

function decreasingStarPattern() {
    for(let i = 1; i <= 5; i++) {
        let stars = "";

        for(let j = 5; j >= i; j--) {
            stars += "*";
        }
        console.log(stars);
    }
};

decreasingStarPattern();