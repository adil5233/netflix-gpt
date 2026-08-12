import React, { useRef } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies ?? []);

  // Generate a random index between 0 and 19 and store in useRef
  const randomIndexRef = useRef(Math.floor(Math.random() * 20));

  // If no movies, render nothing
  if (movies.length === 0) return null;

  // Modulo guards against a short result set from TMDB
  const mainMovie = movies[randomIndexRef.current % movies.length];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full min-h-[70vh] md:h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <VideoBackground movieId={id} />
      </div>
      {/* Content sits at the bottom of the hero, so no fixed offsets are needed */}
      <div className="relative z-20 flex min-h-[70vh] md:h-screen items-end pb-10 md:pb-32 pointer-events-none">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
