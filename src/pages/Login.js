import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user by mobile and password
    const foundUser = users.find(
      (user) => user.mobile === mobile && user.password === password
    );

    if (foundUser) {
      alert(`Login Successful! Welcome, ${foundUser.firstName}.`);
      // You can store logged-in user info if you want
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      // Redirect to homepage or profile
      navigate("/");
    } else {
      alert("Invalid mobile number or password.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            placeholder="10-digit number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
