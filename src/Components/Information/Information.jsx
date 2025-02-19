import info_img_1 from "../../assets/info-img1.webp";
import info_img_2 from "../../assets/info-img2.webp";
import "./Information.css";

const Information = () => {
  return (
    <div className="info">
      {/* Mission Section (Text First, Image Second) */}
      <div className="info-container1">
        <div className="info-box">
          <h2>Our Vision</h2>
          <p>
            Aaradhya Chemicals strives to be a trusted partner for the construction industry, known for its innovative chemical solutions that enhance concrete performance, sustainability, and longevity. Our vision is to become a global leader in the field of construction chemicals, driving the future of infrastructure development with our advanced products.
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
          <h2>Our Commitment to Quality</h2>
          <p>
            At Aaradhya Chemicals, quality is at the core of everything we do. We adhere to stringent quality control processes and use the latest technological advancements to develop our products. This ensures that each product we deliver performs optimally under various conditions, helping our clients meet the highest construction standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
