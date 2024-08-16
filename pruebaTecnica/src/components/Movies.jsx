function ListOfMovies({ movies }) {
    return (
        <ul>
            {
                movies.map(movie => (
                    <li key={movie.id} className="movie">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                    </li>
                ))
            }
        </ul>
    )
}

function NoResults() {
    return (
        <p>No se encontraron resultados para esta búsqueda</p>
    )
}

export default function Movies({ movies }) {

    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoResults />
    )
}