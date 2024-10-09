import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Navbar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    navigate("/signup-login"); // Navigate to the signup/login page
  };

  return (
    <nav className={`navbar ${scrolling ? "shrink" : ""}`}>
      <div className="navbar-brand">
        <a href="/">Assist</a> {/* This is a link to the homepage */}
      </div>
      <button className="btn" onClick={handleButtonClick}>
        Signup/LogIn
      </button>
    </nav>
  );
}

export default Navbar;
