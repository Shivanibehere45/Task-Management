import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Dashboard</Link>
      <Link to="/tasks" style={{ marginRight: "15px", color: "white" }}>Tasks</Link>
      <Link to="/add-task" style={{ marginRight: "15px", color: "white" }}>Add Task</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </nav>
  );
};

export default Header;
