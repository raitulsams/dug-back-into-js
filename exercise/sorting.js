let thisArr = [12, 3, 4, 1, 2]
let newArr = thisArr.sort(function (a, b) {
    // console.log(a, b)
    return a - b //for ascending

});
let newArr2 = thisArr.sort(function (a, b) {
    // console.log(a, b)
    return b - a //for descending

});
console.log(newArr)

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.