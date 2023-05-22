import React from "react";

const MovieCard = ({movie}) => {
    return(
        <div className="relative bg-red-500 group hover:scale-105 transition-transform rounded-2xl overflow-clip">
            <div className="absolute  w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none ">
                <p className="ml-4 mt-4 text-white">{movie.Year}</p>
            </div>
                <img  className="w-full h-full object-cover" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
            <div className="absolute bottom-0 left-0  bg-[#343739] group-hover:bg-transparent transition-colors duration-200 text-white w-full  py-4 pl-5">
                <span className="uppercase tracking-widest text-sm">{movie.Type}</span>
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;