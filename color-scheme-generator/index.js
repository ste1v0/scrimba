const colorPicker = document.getElementById('color-picker')
const btn = document.getElementById('btn')
const select = document.getElementById('select')
const colors = document.getElementById('colors')


btn.addEventListener("click", function() {
    
    const hex = colorPicker.value.slice(1)
    const mode = select.value
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
                for (let i = 1; i <= data.colors.length; i++) {
                    document.getElementById(`color-${i}`).style.background = data.colors[i - 1].name.closest_named_hex
                    document.getElementById(`hex-${i}`).textContent = data.colors[i - 1].name.closest_named_hex.toUpperCase()
                }
        })
})