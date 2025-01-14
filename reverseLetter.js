const sentence = "amake ulta kore din"
let rev = "";
for (const sntnc of sentence) {
    console.log(sntnc)
    rev = sntnc + rev

}
console.log(rev)

console.log(sentence.split("").reverse().join(""))