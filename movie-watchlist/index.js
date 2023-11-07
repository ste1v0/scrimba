const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const apiURL = 'https://www.omdbapi.com'
const apiKEY = 'cd8d3209'
const main = document.getElementById('main')

async function findMovie(event) {
        event.preventDefault()
        if (main.classList.contains('height')) {
            main.classList.remove('height')
        }

        const res = await fetch(`${apiURL}?apikey=${apiKEY}&s=${searchInput.value}`)
        const data = await res.json()
    
        const movies = data.Search.map(e => e.Title)
    
        main.innerHTML = `<div id="grid-container"></div>`
        fetchDetails(movies)
}

async function fetchDetails(movies) {
    let result = ''
    for (let movie of movies) {
        const res = await fetch(`${apiURL}?apikey=${apiKEY}&t=${movie}`)
        const data = await res.json()

            result += `
            <div class="grid-item">
                <img class="poster" src="${data.Poster}">
                <p class="title">${data.Title} <img class="favorite" src="./img/favorite.svg"> <span class="rating">${data.imdbRating}</span></p>
                <p class="duration">${data.Runtime}</p>
                <p class="genres">${data.Genre}</p>
                <img class="add-icon" src="./img/add.svg">
                <p class="add-watchlist-text">Watchlist</p>
                <p class="description">${data.Plot}</p>
            </div>
            <hr>
            `
        }
    document.querySelector('#grid-container').innerHTML += result
}

searchBtn.addEventListener('click', findMovie)
            