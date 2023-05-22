import React, { useEffect, useState } from "react";
import {IoSearchOutline} from "react-icons/io5"
import {TbFaceIdError, TbLoader2} from "react-icons/tb"
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
        const data = await response.json();
        setMovies(data.Search);
        setIsLoading(false);
    }
    useEffect(() => { 
        searchMovies('Dragon ball');
    }, [])

return(
    <div className="bg-slate-900 min-h-screen   relative">
    

    <h1 className="font-black text-6xl text-center pt-8 text-teal-600 font-bebas tracking-wide">Filmfare</h1>
    <form  
    className="  max-w-3xl w-[60%] mx-auto my-8 relative "
    onSubmit={(e) => {
        e.preventDefault();
        searchMovies(searchTerm)}}>
        <input 
        className=" w-full h-16 placeholder:text-slate-400 placeholder:text-lg px-8 rounded-full bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-white  focus:ring-opacity-20"
        placeholder="Search for movies" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className=" absolute right-5 top-1/2 -translate-y-1/2">
        <IoSearchOutline className="text-3xl text-white"/>
        </button>
    </form>
    
    

    {
        isLoading ? <div className="w-full h-full absolute top-0 left-0 pointer-events-none  grid place-items-center">
        <TbLoader2 className="text-6xl text-white  mx-auto mt-16 animate-spin" />
        </div>   : movies?.length > 0
        ? (
            <div className="flex flex-wrap justify-center mx-20 pb-28 md:mx-32 lg:mx-44 gap-16 mt-28">
                {movies.map((movie,index) => (
                    <MovieCard key={index} movie={movie}/>
                ))}
            </div>
        ) :
        (
            <div className="w-full h-full  text-white absolute top-0 left-0 gap-y-4 pointer-events-none   flex flex-col justify-center items-center">
        <TbFaceIdError className="text-7xl  mx-auto mt-16  " />
        <h2 className="font-mono  text-2xl">Not Found </h2>
        </div> 
        )
    }

    </div>
)
}

export default App;