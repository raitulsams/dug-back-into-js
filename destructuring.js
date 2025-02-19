// The destructuring syntax unpack object properties into variables

// object destructuring

let person = {
    "lastname": "Sams",
    age: 26,
    fav_foods: ["Pizza", "Coffee"]
}
let { lastname: nickname, age } = person // using alias for variable names
let { fav_foods: favoriteFoods } = person
console.log(nickname)
console.log(age)
console.log(favoriteFoods)

// array destructuring

let myArr = ["Nike", 23, 34]
let [a, ...b] = myArr
console.log(a)
console.log(b)