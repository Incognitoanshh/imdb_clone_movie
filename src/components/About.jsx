import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="relative m-5 p-5 bg-gradient-to-r from-yellow-300 to-yellow-100 rounded-lg shadow-lg text-black">
      {/* Profile Image */}
      <img
        src="/images/images.jpeg"
        alt="Profile"
        className="absolute top-0 left-0 w-16 h-16 rounded-full m-4"
      />
      <h2 className="text-4xl font-bold mb-4 text-center">About Us</h2>
      <p className="mb-2 text-lg">
        Welcome to our <span className="font-semibold">Aj Universe</span>, where
        you can find and manage your favorite films!
      </p>
      <p className="mb-4">
        Our goal is to provide an easy-to-use platform for movie enthusiasts to
        explore, track, and manage their watchlists. Enjoy browsing through a
        wide range of movies and adding them to your personal watchlist for
        later viewing.
      </p>
      <h3 className="text-2xl font-bold mb-2">Features:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Browse a wide selection of movies</li>
        <li>Add movies to your watchlist</li>
        <li>Remove movies from your watchlist</li>
        <li>View detailed information about each movie</li>
      </ul>
      <p>
        Thank you for using our application! We hope you enjoy your movie
        journey with us.
      </p>
      <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
      <p className="text-lg mb-4">
        At Aj Universe, our mission is to make movie discovery easy and fun for
        every movie enthusiast. We aim to provide a platform where users can
        explore the world of cinema, discover new films, and keep track of their
        favorites.
      </p>
      <h3 className="text-2xl font-bold mb-2">Technologies We Use</h3>
      <ul className="list-disc list-inside mb-4">
        <li>ReactJS for frontend development</li>
        <li>Tailwind CSS for styling</li>
        <li>Node.js for backend services</li>
        <li>MongoDB for database management</li>
      </ul>
      <h3 className="text-2xl font-bold mb-2">What Users Say</h3>
      <div className="space-y-4">
        <blockquote className="p-4 bg-yellow-100 rounded-lg">
          <p>
            "Aj Universe makes it super easy to track all the movies I want to
            watch. A must-have app for any movie lover!"
          </p>
          <cite>– User 1</cite>
        </blockquote>
        <blockquote className="p-4 bg-yellow-100 rounded-lg">
          <p>
            "The user-friendly design and wide selection of movies make this app
            my go-to for finding new films."
          </p>
          <cite>– User 2</cite>
        </blockquote>
      </div>
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-bold mb-2">Ready to Explore?</h3>
        <p className="mb-4">Join Aj Universe and discover a world of cinema.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors">
          Sign Up Now
        </button>
      </div>
      <h3 className="text-2xl font-bold mb-2">Our Journey</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">2023: Idea Conception</h4>
          <p>
            We started with a simple idea: make movie tracking fun and easy.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">2024: Initial Release</h4>
          <p>Aj Universe was launched, and we began growing our user base.</p>
        </div>
        <div>
          <h4 className="font-semibold">2024: New Features Added</h4>
          <p>
            We added watchlists, reviews, and recommendations to improve the
            experience.
          </p>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">Awards and Recognition</h3>
      <p className="mb-4">
        Our app has been recognized by the tech community and featured in
        several media outlets, including:
      </p>
      <ul className="list-disc list-inside">
        <li>Best Movie App 2024 - Tech Awards</li>
        <li>Featured in 'Top 10 Entertainment Apps' by AppReview</li>
      </ul>
      <h3 className="text-2xl font-bold mb-2">Frequently Asked Questions</h3>
      <div>
        <h4 className="font-semibold">How can I add movies to my watchlist?</h4>
        <p>
          Simply click on the 'Add to Watchlist' button on the movie page to
          keep track of films you want to watch.
        </p>
      </div>
      <div>
        <h4 className="font-semibold">Is the app free to use?</h4>
        <p>Yes! Aj Universe is completely free for all users.</p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="my-5 text-center">
        <h2 className="text-black">Contact Me</h2>
        <div className="flex justify-center items-center space-x-4">
          <a
            href="https://github.com/Incognitoanshh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/amritanshu1403"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/__annnshh__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/home.php"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://discord.gg/VEnJKeQa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
        <style jsx>{`
          a:hover {
            transform: scale(1.1);
            transition: transform 0.2s;
          }
        `}</style>
      </div>
    </div>
  );
};

export default About;
