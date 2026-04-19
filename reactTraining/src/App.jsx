import { use, useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import spinner from './components/spinner';
import MovieCard from './components/MovieCard';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {method: 'GET',
   headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
   }};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('')
    try {
const endpoint =  query ? `${API_BASE_URL}/search/movie?query=${query}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
const response = await fetch (endpoint, API_OPTIONS);

if (!response.ok) {
  throw new Error('Failed to fetch movies')
}

const data = await response.json()
console.log(data);

if (data.response === 'False') {
setErrorMessage(data.Error || 'failed to fetch movies')
setMovies([])
return;
}
setMovies(data.results || [])
    }
    catch (error) {
      setErrorMessage(`Error fetching movies. please try again later.`)
    }

    finally {
    setIsLoading(false)
  }
  }


  useEffect( () => {
fetchMovies(searchTerm);
  }, [searchTerm])

  return (
    <main>
<div className="pattern">
<div className="wrapper">
  <header>
    <img src="./hero-img.png" alt="hero banner" />
    <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </header>

  <section className='all-movies'>
<h2 className='mt-[40px]'>All Movies</h2>
{isLoading ? ( <spinner />) : errorMessage ? 
( <p className='text-red-500'>{errorMessage}</p>) : <ul> {movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}
</ul>}
  </section>
{errorMessage && <p className='text-red-500'>{errorMessage}</p>}

</div>
</div>
    </main>
  )

}

export default App



//CHESS BREAK