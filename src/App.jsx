import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Information from "./Components/Information/Information";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavbarTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
      setIsSidebarOpen(false); // Close Sidebar
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Open/Close Sidebar
  };

  const handleSidebarTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
    }
    setIsSidebarOpen(false); // Close Sidebar After Click
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} setActiveTab={handleNavbarTabChange} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveTab={handleSidebarTabChange}
        activeTab={activeTab} 
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "Home" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === "Home" ? 50 : -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {activeTab === "Home" && 
          <>
            <Home />
            <Information/>
            <Projects/>
            <Contact/>
          </>}
          {activeTab === "Products" && <Information />}
          {activeTab === "About Us" && 
          <>
            <Information/>
            <Projects />
            <Contact/>
          </>}
          {activeTab === "Contact" && <Contact />}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
