import React from "react";
import logo from "../../assets/logo2-bg.png";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""}`}
      onClick={toggleSidebar} // Close the sidebar when clicking outside
    >
      <div className="logo" onClick={(e) => e.stopPropagation()}> {/* Prevent closing on logo click */}
        <img src={logo} alt="" />
        <div className="logo-name">
          <p>SHARDA</p>
          <p>CHEMICALS</p>
        </div>
      </div>
      <ul>
        <li>
          <a href="#" onClick={(e) => e.stopPropagation()}>Home</a> {/* Prevent closing on link click */}
        </li>
        <li>
          <a href="#" onClick={(e) => e.stopPropagation()}>Products</a> {/* Prevent closing on link click */}
        </li>
        <li>
          <a href="#" onClick={(e) => e.stopPropagation()}>About Us</a> {/* Prevent closing on link click */}
        </li>
        <li>
          <a href="#" onClick={(e) => e.stopPropagation()}>Contact</a> {/* Prevent closing on link click */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
