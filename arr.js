// for in normally return the index number
// for of return the array value directly
// for of does not work with objects

let thisArr = ["Orange", "Mango", "Lichi", "Watermelon"]
for (let i of thisArr) {
    console.log(i)
}
for (let i in thisArr) {
    console.log("Index: " + i, "Value: " + thisArr[i])
}
