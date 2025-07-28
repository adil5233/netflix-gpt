import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    // Clear any previous trailer so that loading UI appears on each change
    dispatch(addTrailerVideo(null));

    // Fetch fresh videos for the new movieId
    const getMoviesVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error("Failed to fetch trailer:", err);
      }
    };

    if (movieId) {
      getMoviesVideos();
    }
  }, [movieId, dispatch]);

  return trailerVideo;
};

export default useMovieTrailer;
