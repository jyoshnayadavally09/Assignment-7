import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 import useNavigate

function Signup() {
  const navigate = useNavigate(); // 👈 get navigate function

  // Steps: 1=User Info, 2=OTP, 3=Create Password
  const [step, setStep] = useState(1);

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  // Handle moving from User Info to OTP
  const handleUserInfoSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !mobile) {
      alert("Please fill all fields");
      return;
    }
    if (!/^\d{10}$/.test(mobile)) {
      alert("Mobile number must be 10 digits");
      return;
    }
    setStep(2);
  };

  // Handle OTP submit (no real validation, just 6 digits required)
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(otp)) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }
    setStep(3);
  };

  // Handle password submit and save user to localStorage
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Password should be at least 6 characters");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      mobile,
      password,
    };

    // Get existing users from localStorage or initialize empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user and save
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now log in.");

    // Reset form & step
    setFirstName("");
    setLastName("");
    setMobile("");
    setOtp("");
    setPassword("");
    setStep(1);

    // Navigate to login page
    navigate("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      {step === 1 && (
        <form onSubmit={handleUserInfoSubmit}>
          <h3>Sign Up - Step 1: User Info</h3>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="10-digit number"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send OTP
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleOtpSubmit}>
          <h3>Sign Up - Step 2: Enter OTP</h3>
          <p>We sent an OTP to your mobile number: {mobile}</p>
          <div className="mb-3">
            <label className="form-label">OTP (6 digits)</label>
            <input
              type="text"
              className="form-control"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setStep(1)}
          >
            Back
          </button>
          <button type="submit" className="btn btn-primary">
            Verify OTP
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePasswordSubmit}>
          <h3>Sign Up - Step 3: Create Password</h3>
          <div className="mb-3">
            <label className="form-label">Password (min 6 chars)</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setStep(2)}
          >
            Back
          </button>
          <button type="submit" className="btn btn-success">
            Create Account
          </button>
        </form>
      )}
    </div>
  );
}

export default Signup;
