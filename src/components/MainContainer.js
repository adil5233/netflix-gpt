import React, { useRef } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies ?? []);

  // Generate a random index between 0 and 19 and store in useRef
  const randomIndexRef = useRef(Math.floor(Math.random() * 20));
  console.log(randomIndexRef);

  // If no movies, render nothing
  if (movies.length === 0) return null;

  const mainMovie = movies[randomIndexRef.current];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <div className="absolute -top-[21rem] md:top-0 inset-0 w-full h-1 md:h-screen">
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
