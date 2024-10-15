import React from "react";

function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg')`,
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="text-white text-xl text-center w-full bg-blue-900/60 p-0"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        Avenger Endgame
      </div>
    </div>
  );
}

export default Banner;
