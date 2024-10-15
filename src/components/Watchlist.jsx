import React from "react";

function Watchlist({ watchlist, setWatchlist }) {
  const handleDelete = (id) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((movie) => movie.id !== id)
    );
  };

  return (
    <div className="m-5">
      <h2 className="text-2xl font-bold">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in the watchlist!</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Poster</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Rating</th>
              <th className="border border-gray-300 p-2">Genres</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((movie) => (
              <tr key={movie.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className="h-32 w-auto"
                  />
                </td>
                <td className="border border-gray-300 p-2">{movie.title}</td>
                <td className="border border-gray-300 p-2">
                  {movie.vote_average}
                </td>
                <td className="border border-gray-300 p-2">
                  {movie.genres && movie.genres.length > 0
                    ? movie.genres.map((genre) => genre.name).join(", ")
                    : "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    className="mt-2 p-1 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(movie.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Watchlist;
