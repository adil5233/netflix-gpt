import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 sm:w-36 md:w-48 shrink-0 pr-2 md:pr-4">
      <img
        className="w-full rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        loading="lazy"
      />
    </div>
  );
};

export default MovieCard;
