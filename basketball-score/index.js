let home = 0
let guest = 0

let displayOne = document.getElementById("displayOne")
let displayTwo = document.getElementById("displayTwo")

function displayOnePlusOne() {
    home += 1
    displayOne.textContent = home
}

function displayOnePlusTwo() {
    home += 2
    displayOne.textContent = home
}

function displayOnePlusThree() {
    home += 3
    displayOne.textContent = home
}

function displayTwoPlusOne() {
    guest += 1
    displayTwo.textContent = guest
}

function displayTwoPlusTwo() {
    guest += 2
    displayTwo.textContent = guest
}

function displayTwoPlusThree() {
    guest += 3
    displayTwo.textContent = guest
}

function resetScores() {
    home = 0
    guest = 0
    displayOne.textContent = home
    displayTwo.textContent = guest
}