import React, { useEffect, useState } from "react";
import "../styles/MySlot.css";

function MySlots() {
  const [slots, setSlots] = useState([]);

  const token = localStorage.getItem("token");

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/my-slots`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch slots");
        }
        return res.json();
      })
      .then((data) => setSlots(data))
      .catch((err) => console.log(err));
  }, [token]);

  return (
    <div className="myslots">
      <h2>My Parking Slots</h2>

      {slots.length === 0 ? (
        <p className="no-slots">No slots found</p>
      ) : (
        <div className="slot-container">
          {slots.map((s) => (
            <div className="slot-card" key={s.id}>
              <p>
                <span>Location:</span> {s.location}
              </p>

              <p>
                <span>Price:</span> ₹{s.price}
              </p>

              <button>Cancel</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MySlots;