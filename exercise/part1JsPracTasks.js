
function findNCount(findX) {
    let numbers = [5, 6, 11, 12, 98, 5]
    let count = 0;
    for (let i of numbers) {
        if (i === findX) {
            count++;
        }
        // console.log(i)
    }
    console.log(`Found ${findX}, ${count} times.`)
}
function findVowels(str) {
    // let count = 0;
    // for (let i of str) {
    //     if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u')
    //         count++;
    //     // console.log(i);
    // }
    // console.log(str)
    // console.log(count)


    // another way 

    let count = 0;
    const vowels = "aeiou"; // Define a string containing all vowels

    for (let i of str.toLowerCase()) { // Convert the input string to lowercase
        if (vowels.toLowerCase().includes(i)) { // Check if the character is in the vowels string
            count++;
        }
    }
    console.log(str); // Log the original string
    console.log(count); // Log the vowel count
}
function findLongestWord() {
    // let str = "I am learning                         Programming to become a programmer"
    // let strWords = str.split(" ");
    // let longestWordLen = 0;
    // let countIndex = 0;
    // let longestWordIndex;
    // console.log(strWords)
    // for (let i of strWords) {
    //     if (i.length > longestWordLen) {
    //         longestWordLen = i.length;
    //         longestWordIndex = countIndex;
    //     }
    //     countIndex++;
    // }
    // console.log("Longest Length: " + longestWordLen)
    // console.log("Longest Word Index: " + longestWordIndex)
    // console.log("Longest Word: " + strWords[longestWordIndex])



}

function generateRandom() {
    let randoms = Math.random()
    console.log(Math.round(randoms * 20))
}

generateRandom()

console.dir(Math);
