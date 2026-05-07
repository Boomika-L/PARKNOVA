import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("userEmail");

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  useEffect(() => {
    if (token) {
      fetch(`${API_URL}/my-bookings`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch bookings");
          }
          return res.json();
        })
        .then((data) => setBookings(data))
        .catch((err) => console.log(err));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div>
          <h2 className="logo">ParkNova</h2>

          <ul className="menu">
            <li>Dashboard</li>

            <li onClick={() => navigate("/my-bookings")}>My Bookings</li>

            <li onClick={() => navigate("/my-slots")}>My Slots</li>

            <li onClick={() => navigate("/add-slot")}>Add Slot</li>

            <li onClick={() => navigate("/slots")}>Find Parking</li>

            <li onClick={() => navigate("/payment")}>Payment</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="content">
        <div className="topbar">
          <h1>Dashboard</h1>
          <span className="user">Welcome, {email}</span>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Total Bookings</h3>
            <p>{bookings.length}</p>
          </div>

          <div className="card">
            <h3>Active Slots</h3>
            <p>{bookings.length}</p>
          </div>

          <div className="card">
            <h3>Available Slots</h3>
            <p>10</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="activity">
          <h2>Recent Bookings</h2>

          {bookings.length === 0 ? (
            <p>No bookings found</p>
          ) : (
            <ul>
              {bookings.map((b) => (
                <li key={b.id}>Slot {b.slotId} booked</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
