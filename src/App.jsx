import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import About from "./components/About";
import Profile from "./components/Profile";
import Banner from "./components/Banner";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [genres, setGenres] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch genres from the API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=d74e7f90f2138e5ec032d85f0bd0f4f6&language=en-US`
        );
        setGenres(res.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  // Add movie to watchlist
  const handleAddtoWatchlist = (movieObj) => {
    const mappedGenres = movieObj.genre_ids
      .map((id) => genres.find((genre) => genre.id === id))
      .filter(Boolean);

    const movieWithGenres = {
      ...movieObj,
      genres: mappedGenres,
    };

    // Prevent duplicates in the watchlist
    if (!watchlist.some((movie) => movie.id === movieWithGenres.id)) {
      setWatchlist((prevWatchlist) => [...prevWatchlist, movieWithGenres]);
      setSuccessMessage(
        `${movieObj.title} has been successfully added to your watchlist!`
      );

      // Remove success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      alert(`${movieObj.title} is already in your watchlist!`);
    }
  };

  return (
    <BrowserRouter>
      <Navbar />

      {/* Display success message when available */}
      {successMessage && (
        <div className="m-5 text-green-600 font-bold text-center">
          {successMessage}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies handleAddtoWatchlist={handleAddtoWatchlist} />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* New route for movie details */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
