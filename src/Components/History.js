import React, { useEffect, useState, useContext } from "react";
import supabase from "./supabaseClient"; // Make sure your supabaseClient is imported
import { UserContext } from "./UserContext"; // Import the UserContext to access logged-in user details
import "../styles/History.css";

function History() {
  const [projects, setProjects] = useState([]);
  const { user } = useContext(UserContext); // Get the logged-in user

  // Fetch user's history of projects (either uploaded or taken)
  const fetchProjectHistory = async () => {
    if (!user?.email) return; // If user is not logged in, return

    const { data, error } = await supabase
      .from("projects")
      .select("id, project_details, price, deadline, status,project_name") // Select required fields excluding email
      .or(`uploader_email.eq.${user.email},taker_email.eq.${user.email}`); // Check for both uploaded or taken projects

    if (error) {
      console.error("Error fetching project history:", error);
    } else {
      setProjects(data);
    }
  };

  useEffect(() => {
    fetchProjectHistory(); // Fetch projects when the component is mounted
  }, [user]);

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
        <tbody>
          {projects.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-projects">
                No project history found
              </td>
            </tr>
          ) : (
            projects.map((project) => (
              <tr key={project.id}>
                <tb>{project.project_name}</tb>
                <td>{project.project_details}</td>
                <td>{project.price}</td>
                <td>{project.deadline}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default History;
