/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const calcOneText = document.querySelector("#calcOneText")
const calcTwoText = document.querySelector("#calcTwoText")
const calcThreeText = document.querySelector("#calcThreeText")

btn.addEventListener("click", function() {
    const inputValue = input.value

    const lengthM = inputValue * 3.281
    const lengthF = inputValue / 3.281
    const volumeL = inputValue * 0.264
    const volumeG = inputValue / 0.264
    const massK = inputValue * 2.204
    const massP = inputValue / 2.204

    calcOneText.innerHTML = `${inputValue} meters = ${Number(lengthM).toFixed(3)} feet | ${inputValue} feet = ${Number(lengthF).toFixed(3)} meters`
    calcTwoText.innerHTML = `${inputValue} liters = ${Number(volumeL).toFixed(3)} gallons | ${inputValue} gallons = ${Number(volumeG).toFixed(3)} liters`
    calcThreeText.innerHTML = `${inputValue} kilos = ${Number(massK).toFixed(3)} pounds | ${inputValue} pounds = ${Number(massP).toFixed(3)} kilos`
})