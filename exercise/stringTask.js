// Count how many times a string has the letter a

let a = "Samsa"
let count = 0
for (let i of a) {
    if (i == 'a') {
        count++;
    }
    // console.log(i)
}
console.log(count)//2


// Count how many times a string has the letter a or A


let a2 = "SamsaAssaAa"
let count2 = 0
for (let i of a2) {
    if (i == 'a' || i == 'A') {
        count2++;
    }
    // console.log(i)
}
console.log(count2)//6

// Check whether a string contains all the vowels a, e, i, o, u

let a3 = "Awweiouaa"
let count3 = 0
for (let i of a3) {
    if (i.toUpperCase() == 'a'.toUpperCase() || i.toUpperCase() == 'e'.toUpperCase() || i.toUpperCase() == 'i'.toUpperCase() || i.toUpperCase() == 'o'.toUpperCase() || i.toUpperCase() == 'u'.toUpperCase()) {
        count3++;
    }
    // console.log(i)
}
console.log(count3) //7

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// let thisString = "This contains xXxxX and YyXXY"
// let newString
// for (let i of thisString) {
//     if (i === "x") {
//         newString = thisString.replace(i, "y")
//         if (i === "X") {
//             newString = newString.replace(i, "Y")
//         }
//     }
//     console.log(i)
// }
// console.log("Old: " + thisString)
// console.log("New: " + newString)

let text = "Mr Blue has a x house and a X car";
let result = text.replace(/x|X/gi, function (val) {
    if (val === "x") {
        return "y";
    }
    if (val === "X") {
        return "Y";
    }

});
console.log(result)