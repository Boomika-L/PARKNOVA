import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav style={{ background: "#0f172a", color: "white", padding: "10px" }}>
      <Link to="/">Home</Link> | <Link to="/slots">Slots</Link>

      {!token ? (
        <>
          {" | "}
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </>
      ) : (
        <>
          {" | "}
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;