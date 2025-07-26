import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative z-20 px-4 md:px-12 lg:px-16 pt-[2rem] md:pt-40 lg:pt-48 max-w-xl lg:max-w-2xl">
      <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white pt-[2.75rem] mb-4 lg:mb-6 leading-tight drop-shadow-2xl">
        {title}
      </h1>
      <p className="text-opacity-0 md:text-opacity-100 text-sm md:text-base lg:text-lg xl:text-xl text-white -mb-[2rem] lg:mb-8 leading-relaxed opacity-90 line-clamp-3 drop-shadow-lg max-w-md lg:max-w-lg">
        {overview}
      </p>
      <div className="flex flex-row gap-3">
        <button className="bg-white text-black px-6 lg:px-8 py-2 lg:py-3 rounded-sm font-bold flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 shadow-lg">
          <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-current" />
          <span className="text-sm lg:text-base">Play</span>
        </button>
        <button className="bg-gray-500 bg-opacity-60 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-sm font-bold flex items-center justify-center space-x-2 hover:bg-opacity-40 transition-all duration-200 transform hover:scale-105 shadow-lg">
          <Info className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="text-sm lg:text-base">More Info</span>
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
