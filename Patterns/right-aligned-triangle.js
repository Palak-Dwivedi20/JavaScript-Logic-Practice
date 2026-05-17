// Right Aligned Triangle

function rightAlignedTriangle() {
    for(let i = 1; i <= 5; i++) {
        let stars = "";

        for(let j = 1; j <= 5 - i; j++) {
            stars += " ";
        }

        for(let k = 1; k <= i; k++) {
            stars += "*";
        }
        console.log(stars);
    }
};

rightAlignedTriangle();