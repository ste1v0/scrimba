const searchBtn = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const apiURL = 'https://www.omdbapi.com'
const apiKEY = 'cd8d3209'
const main = document.getElementById('main')

let movies = []

searchBtn.addEventListener('click', async function(event) {
    document.getElementById('explore-text').classList.add('hidden')
    document.getElementById('explore-pic').classList.add('hidden')
    movies = []
    event.preventDefault()
    main.classList.remove('height')
    await fetch(`${apiURL}?apikey=${apiKEY}&s=${searchInput.value}`)
        .then(res => res.json())
        .then(data => {
                data.Search.map(e => movies.push(e.Title))
        })

        main.innerHTML = `<div id="grid-container"></div>`

        for (let movie of movies) {
            await fetch(`${apiURL}?apikey=${apiKEY}&t=${movie}`)
                .then(res => res.json())
                .then(data => {

                let gridContainer = `
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

                document.querySelector('#grid-container').innerHTML += gridContainer
        
                })}
                


})