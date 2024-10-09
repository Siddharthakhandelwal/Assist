import React, { useState, useContext } from "react";
import Navbar from "./Home_Navbar";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import History from "./History";
import Wallet from "./Wallet";
import FeedbackForm from "./FeedbackForm";
import "../styles/Home.css";
import { UserContext } from "./UserContext"; // Import the UserContext

function Home() {
  const { user } = useContext(UserContext); // Get user data from context

  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "projects":
        return <Projects />;
      case "history":
        return <History />;
      case "wallet":
        return <Wallet />;
      case "feedback":
        return <FeedbackForm />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <div className="main-content">{renderPage()}</div>
      {/* to display credentails */}
      {/* {user.email && <p>Your email: {user.email}</p>}
      {user.password && <p>Your password: {user.password}</p>} */}
    </div>
  );
}

export default Home;
