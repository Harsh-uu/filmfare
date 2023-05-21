import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=2e7a8bad'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const searchMovies = async (title) => {
        setIsLoading(true);
        const response = await fetch(`${API_URL}&s=${title}`)
        setIsLoading(false);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => { 
        searchMovies('Dragon ball');
    }, [])

return(
    <div className="app">
    <h1>MovieLand</h1>

    
    <form className="search" onSubmit={(e) => {
        e.preventDefault();
        searchMovies(searchTerm)}}>
        <input 
        placeholder="Search for movies" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
        <img
        src={SearchIcon}
        alt="Search"
        />
        </button>
    </form>
    
        
    {
        isLoading ? <p className="loading">Loading...</p> : movies?.length > 0
        ? (
            <div className="container">
                {movies.map((movie,index) => (
                    <MovieCard key={index} movie={movie}/>
                ))}
            </div>
        ) :
        (
            <div className="empty">
            <h2>No movies found</h2>
            </div>
        )
    }

    <div className="container">
    </div>
    </div>
)
}

export default App;