let arrMax = (c, d) => {
    let e = [...c, ...d]
    let maxVal = Math.max(...e)
    // console.log(Math.max(...e))
    return maxVal
}
let arr1 = [1, 3, 4]
let arr2 = [56, 76, 880, 5]
// arrMax(arr1, arr2)

let sqrAve = (arr) => {
    let sum = 0
    arrLen = arr.length
    // console.log(arrLen)
    for (const val of arr) {
        sqrVal = val ** 2
        sum += sqrVal
        // console.log(sqrVal)
    }

    ave = sum / arrLen
    // console.log(sum)
    return ave

}
let averageofSummed = sqrAve([2, 4, 5, 6, 8])
console.log(averageofSummed)