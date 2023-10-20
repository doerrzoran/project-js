const form = document.querySelector('#movieSearch')
const image_path = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'
const page_path = 'https://www.themoviedb.org/tv'
const pagination = document.querySelector('#pagination')
const click1 = document.querySelector('.click1')
const click2 = document.querySelector('.click2')
const click3 = document.querySelector('.click3')

function showMovies(page){
    const base_url = 'https://api.themoviedb.org/3'
    const api_key = '68013a55301d899f13df4e95038ac2b0'
    const movie_title = document.querySelector('#title').value
    const movies_list = document.querySelector('#list-movies')
    fetch(`${base_url}/search/movie?api_key=${api_key}&query=${movie_title}&page=${page}`).then(response => response.json()).then( response => {
        console.log(response)
        response.results.length = 2
        console.log(response.results.length)
    
        const movies = response.results
        console.log(movies)
        movies_list.innerHTML = movies.map( movie => {
            return `<article>
            <h3>${movie.original_title}</h3>
            <p>${movie.overview}</p>
            <img src="${image_path}${movie.poster_path}" width="20%" height="30%">
        </article>`
        })
        // pagination.innerHTML = 
    })
}
        
form.addEventListener('submit', (e) => {
    e.preventDefault()
    showMovies(1)

})

click1.addEventListener('click', () => {
    showMovies(1)
})
click1.addEventListener('click', () => {
    showMovies(2)
})
click1.addEventListener('click', () => {
    showMovies(3)
})