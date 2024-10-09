import React, { useContext } from "react";
import "../styles/Home_Navbar.css";
import { UserContext } from "./UserContext"; // Import the UserContext

function Navbar({ setActivePage }) {
  // const { user } = useContext(UserContext); // Get user data from context
  return (
    <nav className="navbar">
      <ul className="nav-links"><li onClick={() => setActivePage("dashboard")}>Assist</li></ul>
      <ul className="nav-links">
        <li onClick={() => setActivePage("projects")}>Projects</li>
        <li onClick={() => setActivePage("history")}>History</li>
        <li onClick={() => setActivePage("wallet")}>Wallet</li>
        <li onClick={() => setActivePage("feedback")}>Feedback</li>
      </ul>
      {/* <p>Logged in as: {user.email}</p> */}
    </nav>
  );
}

export default Navbar;
