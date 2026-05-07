import React, { useEffect, useState } from "react";
import SlotCard from "../components/SlotCard";

function FindParking() {
  const [slots, setSlots] = useState([]);

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/slots`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch parking slots");
        }
        return res.json();
      })
      .then((data) => setSlots(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Available Parking Slots</h2>

      {slots.length === 0 ? (
        <p>No parking slots available</p>
      ) : (
        slots.map((slot) => (
          <SlotCard key={slot.id} slot={slot} />
        ))
      )}
    </div>
  );
}

export default FindParking;