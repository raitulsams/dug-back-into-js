let arr = [1, 2, 5, 6, 7, 8]
let myVal = 5;
arr.forEach((currentValue, idx, fullArr) => {
    console.log("Current Value:", currentValue);
    console.log("Index:", idx);
    console.log("Attribute:", fullArr);
    console.log(myVal)

}, myVal)