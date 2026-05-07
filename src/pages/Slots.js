import React, { useEffect, useState } from "react";
import "../styles/Slot.css";
import { useNavigate } from "react-router-dom";

function Slots() {

  const [slots, setSlots] = useState([]);

  const navigate = useNavigate();

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  useEffect(() => {

    fetch(`${API_URL}/slots`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch slots");
        }
        return res.json();
      })
      .then((data) => setSlots(data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div className="slots">

      <h2>Available Slots</h2>

      <div className="slot-grid">

        {slots.length === 0 ? (
          <p>No slots available</p>
        ) : (
          slots.map((s) => (
            <div className="slot-card" key={s.id}>

              <p>{s.location}</p>

              <p>₹{s.price}</p>

              <button
                onClick={() =>
                  navigate("/payment", { state: s })
                }
              >
                Book
              </button>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Slots;