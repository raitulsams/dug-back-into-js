function sqr() {
    for (let i = 1; i <= 100; i++) {
        if (i !== 1 && Math.sqrt(i) % 1 === 0) { // Check if the number is a perfect square
            console.log("First square number encountered:", i);
            break;
        }
    }



}
sqr();

console.log(Math.sqrt(2));
console.log(2 % 8);