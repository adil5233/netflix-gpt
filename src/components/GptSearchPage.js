import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import Background from "./Background";

const GptSearchPage = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
      <Background />
    </div>
  );
};

export default GptSearchPage;
