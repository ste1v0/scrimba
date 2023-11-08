const main = document.getElementById('main')

let result = ''

if (localStorage.length > 0) {
    if (main.classList.contains('height')) {
        main.classList.remove('height')
    }
    main.innerHTML = `<div id="grid-container"></div>`
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        const parsed = JSON.parse(value)

        result += `
        <div class="grid-item">
            <img class="poster" src="${parsed.Poster}">
            <p class="title">${parsed.Title} <img class="favorite" src="./img/favorite.svg"> <span class="rating">${parsed.imdbRating}</span></p>
            <p class="duration">${parsed.Runtime}</p>
            <p class="genres">${parsed.Genre}</p>
            <div class="watchlist-container">
            <img data-id="${i}" class="add-icon" src="./img/remove.svg">
            <p data-id="${i}" class="add-watchlist-text">Remove</p>
        </div>
            <p class="description">${parsed.Plot}</p>
        </div>
        <div class="hr">
            <hr>    
        </div>

        `
    }
    document.querySelector('#grid-container').innerHTML += result

    const buttons = document.querySelectorAll('.add-icon')
    buttons.forEach(e => {
        e.addEventListener('click', function(event) {
            const buttonId = parseInt(event.target.getAttribute('data-id'), 10)
            localStorage.removeItem(`movieData-${buttonId}`)
            event.target.closest('.grid-item').remove();
            event.target.closest('.hr').remove();
        })
    })
}



            