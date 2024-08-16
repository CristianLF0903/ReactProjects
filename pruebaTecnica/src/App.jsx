import { useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'


export default function App() {
    const [sort, setSort] = useState(false)
    const {search, updateSearch, error} = useSearch()
    const { movies, getMovies, loading } = useMovies({ search, sort })

    const handleSubmit = (event) => {
        event.preventDefault()
        getMovies()
    }

    const handleChange = (event)=>{
        updateSearch(event.target.value)
    }

    const handleSort = () =>{
        setSort(!sort)
    }

    return (
        <div className='page'>
            <header>
                <h1>Buscador de películas</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input style={{
                        border: '1px solid transparent',
                        borderColor: error ? 'red' : 'transparent'
                    }} 
                    type="text" onChange={handleChange} value={search} placeholder="Avenger, Avatar, Star Wars..." />
                    <button type="submit">Buscar</button>
                    <input type='checkbox' onChange={handleSort} checked={sort}/>
                </form>
                { error && <p style={{color: 'red'}}>{error}</p>}
            </header>

            <main>
                {
                    loading ? <p>Buscando...</p> : <Movies movies={movies} />
                }

            </main>
        </div >
    )
}