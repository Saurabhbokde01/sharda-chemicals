import { useEffect, useState } from "react";
import img1 from "../../assets/about-img-1.webp";
import img2 from "../../assets/about-img-2.webp";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className="about-section">
      <div className={`about-container ${isVisible ? "fade-in" : ""}`}>

        <div className="about-box">
          <h2 className="about-title">About Sharda Chemicals</h2>
          <img src={img1} alt="Company operations" className="about-img" />
          <p className="about-text">
            Sharda Chemicals is a certified company specializing in high-quality
            Pre and Post-construction chemicals. We ensure excellence by sourcing
            top-tier constituents from trusted vendors.
          </p>
        </div>

        <div className="about-box">
          <h2 className="about-title">What We Can Do?</h2>
          <img src={img2} alt="Our expertise" className="about-img" />
          <p className="about-text about-text2">
            As a leading manufacturer, we supply superior construction chemicals
            to major industrial and infrastructural projects, ensuring
            cutting-edge solutions for modern construction demands.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
