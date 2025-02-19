const arr = [1, 3, 4, 5, 6, 7, 87, 9]
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
console.log(...arr)
const updatedVehicle = { ...myVehicle }
console.log(updatedVehicle)