import React from "react";

function MovieCard({ id, posterPath, name, handleAddtoWatchlist }) {
  return (
    <div
      className="relative m-2 h-[40vh] w-[calc(100%/7-1rem)] bg-center bg-cover rounded-xl hover:scale-110 duration-300 sm:w-[calc(100%/3-1rem)] lg:w-[calc(100%/5-1rem)]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})`,
      }}
      aria-label={`View details for ${name}`} // Add aria-label for accessibility
    >
      <div
        className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900/60 hover:bg-red-700 transition duration-300"
        onClick={(e) => {
          e.stopPropagation(); // Prevent link from firing when clicking the add to watchlist button
          handleAddtoWatchlist();
        }}
        style={{ cursor: "pointer" }}
        aria-label="Add to Watchlist"
      >
        &#128151; {/* Heart emoji for "Add to Watchlist" */}
      </div>
      <div
        className="text-white text-xl w-full p-2 text-center bg-gray-900/60 truncate"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
