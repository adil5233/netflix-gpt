import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //   if (!movies || movies.length === 0) return null; // Early return if movies is null/empty
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((a) => (
            <MovieCard key={a.id} posterPath={a.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
