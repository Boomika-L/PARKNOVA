import React, { useEffect, useState } from "react";
import "../styles/Bookings.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/my-bookings`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return res.json();
      })
      .then((data) => setBookings(data))
      .catch((err) => console.log(err));
  }, [token]);

  const cancelBooking = async (id) => {
    try {
      const response = await fetch(`${API_URL}/cancel/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token
        }
      });

      if (!response.ok) {
        throw new Error("Failed to cancel booking");
      }

      setBookings(bookings.filter((b) => b.bookingId !== id));

      alert("Booking Cancelled Successfully");

    } catch (err) {
      console.log(err);
      alert("Error cancelling booking");
    }
  };

  return (
    <div className="bookings">
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found</p>
      ) : (
        <div className="booking-container">
          {bookings.map((b) => (
            <div className="booking-card" key={b.bookingId}>
              <p><span>Location:</span> {b.location}</p>
              <p><span>Price:</span> ₹{b.price}</p>
              <p><span>Status:</span> Booked</p>

              <button onClick={() => cancelBooking(b.bookingId)}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;