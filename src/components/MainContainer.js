import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return; // this known as early return

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <div className="absolute inset-0 w-full h-full">
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
