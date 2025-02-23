import { useState, useEffect } from "react";
// import bg from "../../assets/home6.png";
import "./Home.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  // Switch Between Paragraphs
  const handleNext = () => {
    setActiveIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  return (
    <div className="home">
      <div className="home-container">
      <div className="name">
        <p>
          {"SHARDA".split("").map((char, i) => (
            <span key={i} style={{ "--i": i }}>{char}</span>
          ))}
        </p>
        <p>
          {"CHEMICALS".split("").map((char, i) => (
            <span key={i} style={{ "--i": i }}>{char}</span>
          ))}
        </p>
  </div>
        <div className="desc">
          <p className={activeIndex === 0 ? "active" : ""}>
            <h2>About Sharda Chemicals :</h2>
            Sharda Chemicals is a certified company that specializes in the manufacturing, supply, and distribution of various Pre and Post construction chemicals. To keep up with the flawlessness of the assortment, we procure supreme quality constituents from our dependable and trustworthy vendors. It is because of the quality and flawlessness offered that our chemicals are widely applauded in the construction industries.
          </p>
          <p className={activeIndex === 1 ? "active" : ""}>
            <h2>What We Can Do ?</h2>
            Sharda Chemicals is the leading manufacturer and supplier of superior construction chemicals. Sharda Chemicals manufactures a wide range of products which are supplied to some of the biggest construction companies and industries. These construction chemicals are widely used in the construction of industrial, commercial, and infrastructural projects.
          </p>
          <div className="desc-btn">
            <button className="pre-btn" onClick={handlePrev}>{"<"}</button>
            <button className="next-btn" onClick={handleNext}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
