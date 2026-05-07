import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddSlot.css";

function AddSlot() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    location: "",
    price: ""
  });

  const API_URL = "https://parkingbackend-1-vgmm.onrender.com";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    fetch(`${API_URL}/slots`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({
        location: form.location,
        price: parseFloat(form.price)
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add slot");
        }
        return res.json();
      })
      .then(() => {
        alert("Slot Added Successfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        alert("Error adding slot");
      });
  };

  return (
    <div className="add-slot">
      <div className="form-card">
        <h2>Add Parking Slot</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            onChange={handleChange}
            required
          />

          <button type="submit">Add Slot</button>
        </form>
      </div>
    </div>
  );
}

export default AddSlot;