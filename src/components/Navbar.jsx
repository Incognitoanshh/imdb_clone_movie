// src/components/Navbar.js

import React, { useEffect, useState } from "react";
import Logo from "../Movielogo.png";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase"; // Import your Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import Firebase auth methods

const Navbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null); // State to track the user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is logged in
      } else {
        setUser(null); // No user is logged in
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="flex justify-between items-center pl-3 py-4 bg-gradient-to-r from-gray-800 to-gray-900 shadow-md">
      <img className="w-[50px] rounded-full" src={Logo} alt="Logo" />
      <div className="flex space-x-8">
        <Link
          to="/"
          className={`text-2xl font-bold antialiased ${
            location.pathname === "/" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition duration-300`}
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className={`text-2xl font-bold antialiased ${
            location.pathname === "/watchlist"
              ? "text-yellow-500"
              : "text-white"
          } hover:text-yellow-400 transition duration-300`}
        >
          Watchlist
        </Link>
        <Link
          to="/about"
          className={`text-2xl font-bold antialiased ${
            location.pathname === "/about" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition duration-300`}
        >
          About
        </Link>
        <Link
          to="/profile"
          className={`text-2xl font-bold antialiased ${
            location.pathname === "/profile" ? "text-yellow-500" : "text-white"
          } hover:text-yellow-400 transition duration-300`}
        >
          <FontAwesomeIcon icon={faUser} className="mr-1" />
          Profile
        </Link>
        {/* Conditional rendering for login/logout */}
        {user ? (
          <button
            onClick={handleLogout}
            className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-300"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-300"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search Movies..."
          className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-3 top-2 text-gray-400"
        />
      </div>
    </div>
  );
};

export default Navbar;
