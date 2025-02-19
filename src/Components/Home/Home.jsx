import { useState, useEffect } from "react";
import bg from "../../assets/home5.png";
import "./Home.css";

const Home = () => {
  const text = "CHEMICALS"; // Word to animate
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = 250; // Set typing and deleting speed to 250ms

    const typingEffect = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText((prev) => text.substring(0, prev.length + 1));

        if (currentText.length + 1 === text.length) {
          setIsDeleting(true); // Start deleting after full text appears
        }
      } else {
        setCurrentText((prev) => text.substring(0, prev.length - 1));

        if (currentText.length === 0) {
          setIsDeleting(false); // Start retyping immediately
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [currentText, isDeleting]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="name">
          <p>SHARDA</p>
          <p className="text">
            <span style={{ visibility: currentText ? "visible" : "hidden" }}>
              {currentText}
            </span>
            {showCursor && "|"}
          </p>
        </div>
        <div className="desc">
          <p>
            Sharda Chemicals is a certified company that specializes in the manufacturing, supply, and distribution of various Pre and Post construction chemicals. To keep up with the flawlessness of the assortment, we procure supreme quality constituents from our dependable and trustworthy vendors. It is because of the quality and flawlessness offered that our chemicals are widely applauded in the construction industries.
          </p>
        </div>
        <div className="product-btn">
          <button>View Products</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
