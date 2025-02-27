import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Information from "./Components/Information/Information";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Home";
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleNavbarTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
    }
    setIsSidebarOpen(false);
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case "Home":
        return "Sharda Chemicals - Leading Chemical Industry";
      case "Products":
        return "Our Products - Sharda Chemicals";
      case "About Us":
        return "About Us - Sharda Chemicals";
      case "Contact":
        return "Contact Us - Sharda Chemicals";
      default:
        return "Sharda Chemicals";
    }
  };

  return (
    <div className="app"> {/* Main App Container */}
      <Helmet>
      <title>Sharda Chemicals | Industrial & Construction Chemical Manufacturer</title>
        <meta name="description" content="Sharda Chemicals provides high-quality chemical products for various industries." />
        <meta name="keywords" content="Sharda Chemicals, industrial chemicals, construction chemicals, manufacturing" />
        <meta property="og:title" content="Sharda Chemicals | Industrial & Construction Chemical Manufacturer" />
        <meta property="og:description" content="Sharda Chemicals provides high-quality chemical products for various industries." />
        <meta property="og:image" content="/logo2-bg.png" />
        <meta property="og:url" content="https://shardachemicals.com" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shardachemicals.com" />
      </Helmet>

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
          {activeTab === "Home" && (
            <>
              <Home />
              <Information />
              <Projects />
            </>
          )}
          {activeTab === "Products" && <Products />}
          {activeTab === "About Us" && (
            <>
              <About />
              <Information />
              <Projects />
            </>
          )}
          {activeTab === "Contact" && <Contact />}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
