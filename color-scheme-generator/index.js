// GET https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=html&mode=analogic&count=6

const colorPicker = document.getElementById('color-picker')
const btn = document.getElementById('btn')
const select = document.getElementById('select')
const colors = document.getElementById('colors')


btn.addEventListener("click", function(e) {
    
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