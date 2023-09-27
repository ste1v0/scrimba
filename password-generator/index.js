const characters = 
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// console.log(characters.length)

let passwordOne = document.querySelector("#passwordOne")
let passwordTwo = document.querySelector("#passwordTwo")

function generate() {
    let firstPassword = ''
    for (i = 0; i < 15; i++) {
        firstPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordOne.textContent = firstPassword

    let secondPassword = ''
    for (i = 0; i < 15; i++) {
        secondPassword += characters[Math.floor(Math.random() * characters.length)]
    }
    passwordTwo.textContent = secondPassword
}


