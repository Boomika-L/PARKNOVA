import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Bookings.css";

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const token = localStorage.getItem("token");

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  if (!state) {
    return (
      <div className="bookings">
        <h2>No Slot Selected ❌</h2>

        <button onClick={() => navigate("/slots")}>
          Go Back
        </button>
      </div>
    );
  }

  const handlePayment = async () => {
    try {
      const response = await fetch(`${API_URL}/book/${state.id}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token
        }
      });

      if (!response.ok) {
        throw new Error("Payment failed");
      }

      alert("Payment Successful ");

      navigate("/bookings");

    } catch (err) {
      console.log(err);
      alert("Payment Failed ");
    }
  };

  return (
    <div className="bookings">
      <h2>Payment</h2>

      <div className="booking-card">

        <p>
          <span>Location:</span> {state.location}
        </p>

        <p>
          <span>Amount:</span> ₹{state.price}
        </p>

        <select style={{ marginTop: "10px", padding: "8px" }}>
          <option>UPI</option>
          <option>Card</option>
          <option>Cash</option>
        </select>

        <button onClick={handlePayment}>
          Pay Now
        </button>

      </div>
    </div>
  );
}

export default Payment;