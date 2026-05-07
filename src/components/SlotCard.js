// import React from "react";

// function SlotCard({ slot }) {

//   const handleBooking = () => {
//     fetch("http://localhost:5000/api/book", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         user_id: 1,   
//         slot_id: slot.id
//       })
//     })
//     .then(res => res.json())
//     .then(data => {
//       alert("Slot Booked!");
//       window.location.reload();
//     })
//     .catch(err => console.log(err));
//   };

//   return (
//     <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
//       <h3>Slot: {slot.slot_number}</h3>
//       <p>Status: {slot.is_available ? "Available" : "Booked"}</p>

//       {slot.is_available && (
//         <button onClick={handleBooking}>
//           Book Now
//         </button>
//       )}
//     </div>
//   );
// }

// export default SlotCard;