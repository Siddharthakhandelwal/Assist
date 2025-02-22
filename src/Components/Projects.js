import React, { useState, useEffect, useContext } from "react";
// import supabase from "./supabaseClient";
// import { UserContext } from "./UserContext";
import "../styles/Projects.css"; // Ensure you have necessary styles here

const Project = () => {
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);

  // const { user } = useContext(UserContext);
  const uploaderEmail = user?.email;

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm); // Toggle form visibility
  };

  // const fetchProjects = async () => {
  //   const { data, error } = await supabase
  //     .from("projects")
  //     .select("id, project_details, price, deadline, status, taker_email")
  //     .eq("status", "open")
  //     .order("deadline", { ascending: true });

  //   if (error) {
  //     console.error("Error fetching projects:", error);
  //   } else {
  //     setProjects(data);
  //   }
  // };

  // const takeProject = async (projectId) => {
  //   if (!user?.email) {
  //     console.error("No user is logged in.");
  //     return;
  //   }

  //   const { error } = await supabase
  //     .from("projects")
  //     .update({ status: "taken", taker_email: user.email })
  //     .eq("id", projectId);

  //   if (error) {
  //     console.error("Error taking the project:", error);
  //   } else {
  //     fetchProjects();
  //   }
  // };

  // Define handleFormSubmit to handle the project upload form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (!projectName || !projectDetails || !price || !deadline || !file) {
      setError("Please fill in all fields and upload a file.");
      return;
    }

    const { data, error: insertError } = await supabase
      .from("projects")
      .insert({
        project_name: projectName,
        project_details: projectDetails,
        price,
        deadline,
        uploader_email: uploaderEmail,
        status: "open",
      });

    if (insertError) {
      setError(insertError.message);
    } else {
      setError(null);
      setShowForm(false); // Close form after successful submission
      fetchProjects(); // Refresh the project list
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <button className="upload-button" onClick={toggleForm}>
        {showForm ? (
          <i className="fas fa-chevron-up"></i> // Icon for hiding the form
        ) : (
          <i className="fas fa-chevron-down"></i> // Icon for showing the form
        )}
      </button>

      {/* Form to upload a project */}
      {showForm && (
        <div className="project-form-container">
          <h2>Upload a Project</h2>
          <form onSubmit={handleFormSubmit} className="project-form">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Project Name"
              className="form-input"
            />
            <input
              type="text"
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Project Details"
              className="form-input"
            />
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="form-input"
            />
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              placeholder="Deadline"
              className="form-input"
            />
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="form-input"
            />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      )}

      {/* Conditionally render the project list based on showForm state */}
      {!showForm && (
        <table className="project-table">
          <thead>
            <tr>
              <th>Project Details</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-projects">
                  No projects found
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.project_details}</td>
                  <td>{project.price}</td>
                  <td>{project.deadline}</td>
                  <td>{project.status}</td>
                  <td>
                    <button onClick={() => takeProject(project.id)}>Took</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Project;
