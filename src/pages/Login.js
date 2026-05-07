import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password
        })
      });

      const data = await response.json();

      if (!data.token || data.token === "") {
        alert("Invalid email or password");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userEmail", form.email);

      alert("Login Successful ");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Server Error ");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>ParkNova</h2>

        <p className="subtitle">
          Smart Parking System
        </p>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />

          </div>

          <div className="options">

            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <span className="forgot">
              Forgot?
            </span>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

          <p className="signup-text">

            Don't have an account?{" "}

            <span onClick={() => navigate("/signup")}>
              Sign up
            </span>

          </p>

        </form>

      </div>
    </div>
  );
}

export default Login;