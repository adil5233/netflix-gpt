import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an API call to GPT and get Movies Results
    const gptQuery =
      "Act as a Movie recommedation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated. like the example result given ahead. Example Result: Gadar, Sholay, Don, Kuch Kuch Hota hai, Golmaal";
    const gptResults = await openai.chat.completions.create({
      model: "liquid/lfm-2.5-2.6b:free",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
      //TODO: Display an error message if API fails
    }

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray); //> [promise,promise,promise,promise,promise,]
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="pt-24 md:pt-32 px-4 flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-12 gap-3 bg-black/80 rounded-lg p-4"
      >
        <input
          ref={searchText}
          type="text"
          className="w-full p-3 md:p-4 rounded-sm md:col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="md:col-span-3 py-3 px-4 rounded-sm bg-red-700 hover:bg-red-800 text-white font-semibold"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
