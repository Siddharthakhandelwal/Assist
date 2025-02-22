import React, { useEffect, useState, useContext } from "react";
import "../styles/History.css";
function History() {
  return (
    <div className="history">
      <h2>Your Projects</h2>

      {/* Table to display project history */}
      <table className="history-table">
        <thead>
          <tr>
            <tb>Project Name</tb>
            <th>Project Details</th>
            <th>Price</th>
            <th>Deadline</th>
          </tr>
        </thead>
        {/* <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-projects">
                No project history found
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr key={}>
                <tb>{}</tb>
                <td>{}</td>
                <td>{}</td>
                <td>{}</td>
              </tr>
            ))
          )}
        </tbody> */}
      </table>
    </div>
  );
}

export default History;
