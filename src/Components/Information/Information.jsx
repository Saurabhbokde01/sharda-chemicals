import info_img_1 from "../../assets/info-img1.webp";
import info_img_2 from "../../assets/info-img2.webp";
import "./Information.css";

const Information = () => {
  return (
    <div className="info">
      <div className="info-container1">
        <div className="info-box">
          <h2>Our Mission</h2>
          <p>
          We are committed to revolutionizing the construction chemical industry in India and beyond. By delivering high-quality, cost-effective solutions, we aim to build a stronger, more sustainable future. Together, let's create the foundation for tomorrow's innovations.
          </p>
        </div>
        <div className="info-box-img">
          <img src={info_img_1} alt="Vision" />
        </div>
      </div>

      {/* Vision Section (Image First, Text Second) */}
      <div className="info-container2">
        <div className="info-box-img">
          <img src={info_img_2} alt="Commitment to Quality" />
        </div>
        <div className="info-box">
          <h2>Our Vision</h2>
          <p>
          Our vision is to redefine excellence in construction by offering superior chemical solutions. Through unwavering dedication to quality and global standards, we ensure superior quality and reliability in every product we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
