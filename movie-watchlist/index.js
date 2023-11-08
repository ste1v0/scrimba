const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const apiURL = 'https://www.omdbapi.com'
const apiKEY = 'cd8d3209'
const main = document.getElementById('main')

let movieData = []

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
    for (let [index, movie] of movies.entries()) {
        const res = await fetch(`${apiURL}?apikey=${apiKEY}&t=${movie}`)
        const data = await res.json()

        movieData[index] = data

            result += `
            <div class="grid-item">
                <img class="poster" src="${data.Poster}">
                <p class="title">${data.Title} <img class="favorite" src="./img/favorite.svg"> <span class="rating">${data.imdbRating}</span></p>
                <p class="duration">${data.Runtime}</p>
                <p class="genres">${data.Genre}</p>
                <div class="watchlist-container">
                    <img data-id="${index}" class="add-icon" src="./img/add.svg">
                    <p data-id="${index}" class="add-watchlist-text">Watchlist</p>
                </div>
                <p class="description">${data.Plot}</p>
            </div>
            <hr>
            `
        }
    document.querySelector('#grid-container').innerHTML += result

    const buttons = document.querySelectorAll('.add-icon')
    buttons.forEach(e => {
        e.addEventListener('click', function(event) {
            const buttonId = parseInt(event.target.getAttribute('data-id'), 10)
            localStorage.setItem(`movieData-${buttonId}`, JSON.stringify(movieData[buttonId]))
        })
    })
}

searchBtn.addEventListener('click', findMovie)


            