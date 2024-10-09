import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import the UserContext
import supabase from "./supabaseClient"; // Import your Supabase client
import "../styles/SignUpLogin.css";

function SignUpLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Get the setUser function from context

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Fetch user from Supabase
    const { data: user, error: fetchError } = await supabase
      .from("user") // Replace 'user' with your table name
      .select("*")
      .eq("mail", email) // Match the entered email
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      // Handle unexpected errors
      setError("Error fetching user");
      return;
    }

    if (user) {
      // If user exists, check if the password matches
      if (user.passwords === password) {
        alert("Login successful");
        setUser({ email, password }); // Set user credentials in context
        navigate("/home"); // Redirect to Home
      } else {
        setError("Incorrect password");
      }
    } else {
      // If user does not exist, insert into the database
      const { error: insertError } = await supabase
        .from("user")
        .insert([{ mail: email, passwords: password }]);

      if (insertError) {
        setError("Error registering user");
      } else {
        alert("Registration successful, user logged in");
        setUser({ email, password }); // Set user credentials in context
        navigate("/home"); // Redirect to Home
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Save Time</h1>
        <p>Invest Time</p>
      </div>
      <div className="login-right">
        <h2>Assist</h2>
        <h3>Login / Sign up</h3>
        <p>Enter your email and password to continue.</p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Must be of 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">
            Submit
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default SignUpLogin;
