import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d74e7f90f2138e5ec032d85f0bd0f4f6&language=en-US`
        );
        setMovie(response.data);
      } catch (err) {
        console.error(
          "Error fetching movie details:",
          err.response ? err.response.data : err.message
        );
        setError(
          err.response
            ? err.response.data.status_message
            : "Error fetching movie details"
        );
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Add more movie details here */}
    </div>
  );
}

export default MovieDetails;
