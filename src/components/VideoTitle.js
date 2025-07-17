import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative z-20 px-4 md:px-16 pt-32 md:pt-40 max-w-2xl">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-white mb-8 leading-relaxed opacity-90 line-clamp-3">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-200 transform hover:scale-105">
          <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
          <span className="text-sm md:text-base">Play</span>
        </button>
        <button className="bg-gray-600 bg-opacity-70 text-white px-6 md:px-8 py-2 md:py-3 rounded-md font-semibold flex items-center justify-center space-x-2 hover:bg-opacity-50 transition-all duration-200 transform hover:scale-105">
          <Info className="w-4 h-4 md:w-5 md:h-5" />
          <span className="text-sm md:text-base">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
