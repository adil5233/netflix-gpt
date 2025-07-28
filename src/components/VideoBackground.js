import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { Volume2, VolumeX } from "lucide-react";
import { addVolumeMute } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  const isMuted = useSelector((store) => store.movies.volumeMute);
  const dispatch = useDispatch();

  function toggleMute() {
    dispatch(addVolumeMute());
  }

  useMovieTrailer(movieId);

  if (!trailer) return null;

  return (
    <div className="w-full h-screen md:h-screen relative overflow-hidden bg-black">
      <iframe
        className="w-full h-full absolute top-0 left-0 pointer-events-none scale-125 object-cover"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=${
          isMuted ? 1 : 0
        }&loop=1&playlist=${
          trailer?.key
        }&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0`}
        title="Netflix Movie Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ border: 0 }}
      />

      {/* Enhanced gradients for better mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/80 md:via-transparent md:to-black opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent md:via-transparent opacity-95 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Mobile-specific top gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 to-transparent md:hidden pointer-events-none" />

      {/* Desktop mute/unmute button */}

      <button
        onClick={toggleMute}
        className="absolute bottom-80 md:bottom-32 right-8 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full flex items-center justify-center transition-all duration-200 z-20 border border-white/20"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
};

export default VideoBackground;
