import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination"; // Import the Pagination component

function Movies({ handleAddtoWatchlist }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=d74e7f90f2138e5ec032d85f0bd0f4f6&language=en-US&page=${currentPage}`
        );
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  return (
    <div>
      <div className="ml-5 text-2xl m-5 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-wrap justify-center">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            posterPath={movieObj.poster_path}
            name={movieObj.title}
            handleAddtoWatchlist={() => handleAddtoWatchlist(movieObj)} // Pass the complete movie object
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default Movies;
