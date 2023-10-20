const base_url = 'https://api.themoviedb.org/3/'
const api_key = '68013a55301d899f13df4e95038ac2b0'


fetch(`${base_url}movie/11?api_key=${api_key}`).then(response => response.json()).then( response => {
    console.log(response)
})

