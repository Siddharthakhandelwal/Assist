import React from "react";
import "../styles/FeedbackForm.css";

function FeedbackForm() {
  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <form>
        <textarea placeholder="Enter your feedback here..." rows="5"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
