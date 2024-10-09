import React, { useState } from "react";
import "./global.css";
import "./projects.css";

function UploadProjectModal({ closeModal }) {
  const [projectName, setProjectName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectName, price, file);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Upload Project</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default UploadProjectModal;
