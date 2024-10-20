// src/components/Signup.js

import React, { useState } from "react";
import { auth } from "../firebase"; // Make sure your firebase config is correctly set
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  return (
    <div className="m-5">
      <h2 className="text-3xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
