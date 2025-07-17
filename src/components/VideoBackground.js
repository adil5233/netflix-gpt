import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  if (!trailer) return null;

  return (
    <div className="w-full aspect-video relative overflow-hidden">
      <iframe
        className="w-full h-full absolute top-0 left-0 pointer-events-none scale-125"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0`}
        title="Netflix Movie Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ border: 0 }}
      />
      {/* Netflix-style gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default VideoBackground;
