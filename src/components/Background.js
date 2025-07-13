import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </div>
  );
};

export default Background;
