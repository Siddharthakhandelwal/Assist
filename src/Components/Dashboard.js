import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Total Earnings</h2>
        <p>$12,340</p>
      </div>
      <div className="card">
        <h2>Time Saved</h2>
        <p>150 Hours</p>
      </div>
      <div className="card">
        <h2>Projects</h2>
        <p>42 Projects</p>
      </div>
      <div className="card">
        <h2>Ratings</h2>
        <p>4.8 / 5.0</p>
      </div>
    </div>
  );
}

export default Dashboard;
