// let thisArr = ["Tim", "Tik", "Tok"]
// let thisString = ""
// for (let i of thisArr) {
//     thisString += i;
//     // console.log(i)
// }
// console.log(thisString)

// Reverse the words of a sentence.Only the position of the word will be reversed.check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person'
console.log(statement.split(" ").reverse().join(" "))