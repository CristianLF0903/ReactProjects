const KEY = '487d83e9'

export const searchMovies = async ({ search }) => {
    if(search){
        // setResponseMovies(withResponse)
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&type=movie&s=${search}`)
            const json = await response.json()

            const movies = json.Search

            return movies?.map(movie => ({
                id: movie.imdbID,
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster
            }))
            
        } catch (e) {
            throw new Error('Error searching movies')
        }
    } else {
        setResponseMovies(withoutResults)
    }
}