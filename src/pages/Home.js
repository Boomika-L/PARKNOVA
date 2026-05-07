import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <nav className="navbar">
        <h1 className="logo">ParkNova</h1>

        <div className="nav-links">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>

      <section className="hero">
        <h2>Find Parking Instantly</h2>
        <p>Book nearby parking slots in seconds. No stress. No searching.</p>

        <div className="hero-buttons">
          <Link to="/slots" className="primary-btn">Find Parking</Link>
          <Link to="/add-slot" className="secondary-btn">List Your Slot</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose ParkNova?</h2>

        <div className="card-container">
          <div className="card">
            <h3>Real-time Availability</h3>
            <p>See live parking slots instantly near you.</p>
          </div>

          <div className="card">
            <h3>Easy Booking</h3>
            <p>Reserve your spot in just one click.</p>
          </div>

          <div className="card">
            <h3>Earn Money</h3>
            <p>Rent your unused parking space hourly.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 ParkNova. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;