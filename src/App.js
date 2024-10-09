import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageCarousel from "./Components/ImageCarousel";
import Feature from "./Components/feature";
import Navbar from "./Components/Navbar";
import SignUpLogin from "./Components/SignUpLogin";
import Home from "./Components/home";
import { UserProvider } from "./Components/UserContext"; // Import the UserProvider

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ImageCarousel />
                  <Feature />
                </>
              }
            />
            <Route path="/signup-login" element={<SignUpLogin />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
