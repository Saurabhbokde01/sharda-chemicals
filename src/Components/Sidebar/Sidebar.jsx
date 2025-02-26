import React from "react";
import logo from "../../assets/logo2-bg.png";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar, setActiveTab, activeTab }) => {
  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab); // Update Page
    }
    toggleSidebar(); // Close Sidebar
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">
      <a
  href="#"
  onClick={(e) => {
    e.preventDefault(); // Prevents page refresh
    setActiveTab("Home");
    toggleSidebar(); // Close Sidebar
  }}
><img src={logo} alt="Logo" /></a>
        <div className="logo-name">
          <p>SHARDA</p>
          <p>CHEMICALS</p>
        </div>
      </div>
      <ul>
        {["Home", "Products", "About Us", "Contact"].map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
