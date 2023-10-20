const form = document.querySelector('#movieSearch')
const image_path = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/'
const page_path = 'https://www.themoviedb.org/tv'
const pagination = document.querySelector('#pagination')


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
        
        console.log(response.total_pages)
        const pages = []
        for (let index = 0; index < response.total_pages; index++) {
            pages.push(index)
        }
        console.log(pages)

        
        pagination.innerHTML = pages.map(displayedPage => {

            return `<li><a href="#" id="page${displayedPage}" aria-current="page">${displayedPage}</a></li>`
            
        })
        pages.map(currentPage => {
            const click = document.querySelector(`#page${currentPage}`)
            click.addEventListener('click', () => {
                console.log(`${currentPage}`)
                showMovies(`${currentPage}`)
            })
        })
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    showMovies(1)

})


