import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  const handleSignup = async () => {

    if (!data.name || !data.email || !data.password) {
      setMessage("All fields are required");
      return;
    }

    try {

      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setMessage("Registration Successful ");

      setData({
        name: "",
        email: "",
        password: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.log(error);
      setMessage("Registration Failed ");
    }
  };

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h2>Create Account</h2>

        <p className="subtitle">
          Register to continue
        </p>

        <div className="signup-form">

          <div className="input-group">
            <label>Name</label>

            <input
              type="text"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              value={data.password}
              onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
            />
          </div>

          <button
            className="signup-btn"
            onClick={handleSignup}
          >
            Sign Up
          </button>

          {message && (
            <p className="message">
              {message}
            </p>
          )}

          <div className="login-text">
            Already have an account?{" "}

            <span onClick={() => navigate("/login")}>
              Login
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;