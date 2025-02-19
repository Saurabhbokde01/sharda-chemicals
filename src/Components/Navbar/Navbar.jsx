import { useState } from "react";
import logo from "../../assets/logo2-bg.png";
import Sidebar from "../Sidebar/Sidebar"; // Import Sidebar component
import "./Navbar.css";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Navbar-left */}
      <div className="navbar-left">
        <a href="#"><img src={logo} alt="logo" /></a>
        <div className="logo-name">
          <p>SHARDA</p>
          <p>CHEMICALS</p>
        </div>
      </div>

      {/* Navbar-right */}
      <div className="navbar-right">
        {["Home", "Products", "About Us", "Contact"].map((tab) => (
          <p 
            key={tab} 
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Menu Icon (Visible on small screens) */}
      <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "✖" : "☰"}
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
    </div>
  );
};

export default Navbar;
