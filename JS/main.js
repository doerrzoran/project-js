const base_url = 'https://api.themoviedb.org/3'
const api_key = '68013a55301d899f13df4e95038ac2b0'
const form = document.querySelector('#movieSearch')
const movies_list = document.querySelector('#list-movies')
const image_path = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'

// form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     fetch(`${base_url}movie/299054?api_key=${api_key}`).then(response => response.json()).then( response => {
        //         console.log(response)
        //     })
        // })
        
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const movie_title = document.querySelector('#title').value
    console.log(movie_title)
    fetch(`${base_url}/search/movie?api_key=${api_key}&query=${movie_title}`).then(response => response.json()).then( response => {
        const movies = response.results
        console.log(movies)
        movies_list.innerHTML = movies.map( movie => {
            return `<article>
            <h3>${movie.original_title}</h3>
            <p>${movie.overview}</p>
            <img src="${image_path}${movie.poster_path}" width="20%" height="30%">

        </article>`
        })
    })
})
