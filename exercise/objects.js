let thisObject = {
    "First Name": "MD Raitul Islam",
    "Last Name": "Sams",
    "Age": 27,
    "Fav Color": ["Black", "White"],
    "Fav Activities": {
        indoor: ["Browse", "Songs", "Sleep"],
        outdoor: ["Explore", "Photo"],
        other: {
            personal: ["Self treat", "Buying stuffs"]
        }
    }
}

let objKeys = Object.keys(thisObject)
console.log(objKeys)

let objValues = Object.values(thisObject)
console.log("Values: " + objValues)

// as values have nested object, we can use JSON.stringfy() to covert it into json string

// let objValues = Object.values(thisObject)

console.log("Values: " + JSON.stringify(objValues))

for (let k in thisObject) {
    console.log(thisObject[k])
}

// let personal = ["Self treat", "Buying stuffs"]
// console.log(typeof personal)

// let thisKeys = Object.keys(thisObject)
// console.log(thisKeys)
// console.log(typeof thisKeys)


// console.log(thisObject["Fav Activities"].other.personal[1])
// console.log(thisObject["First Name"])