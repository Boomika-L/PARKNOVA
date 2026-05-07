import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Slots from "./pages/Slots";
import Dashboard from "./pages/Dashboard";
import AddSlot from "./pages/Addslot";
import MySlots from "./pages/MySlots";
import Bookings from "./pages/Bookings";
import Payment from "./pages/Payment";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-slot" element={<AddSlot />} />
        <Route path="/my-slots" element={<MySlots />} />
                <Route path="/my-bookings" element={<Bookings />} />
<Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;