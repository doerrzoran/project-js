const base_url = 'https://api.themoviedb.org/3/'
const api_key = '68013a55301d899f13df4e95038ac2b0'
const form = document.querySelector('#movieSearch')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     fetch(`${base_url}movie/299054?api_key=${api_key}`).then(response => response.json()).then( response => {
//         console.log(response)
//     })
// })

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(`${base_url}search/movie?api_key=${api_key}&query=the+avengers`).then(response => response.json()).then( response => {
        console.log(response)
    })
})
