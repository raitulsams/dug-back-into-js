function sum() {
    let total = 0;
    console.log(arguments) //[Arguments] { '0': 2, '1': 4, '2': 6, '3': 8, '4': 10 }
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]; // Accessing arguments dynamically
    }
    return total;
}

console.log(sum(2, 4, 6, 8, 10)); // Output: 30

const sumArrow = (...ag) => {
    console.log([...ag])
    return args.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumArrow(2, 3, 6))