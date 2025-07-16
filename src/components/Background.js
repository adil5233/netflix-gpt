import React from "react";
import { BACKGROUND_URL } from "../utils/constants";

const Background = () => {
  return (
    <div className="fixed inset-0">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${BACKGROUND_URL}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
  );
};

export default Background;
