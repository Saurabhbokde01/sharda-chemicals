import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faMobileScreenButton, faHeadphonesSimple, faPaperPlane, faRotateRight} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Side */}
      <div className="contact-left">
        <div className="contact-heading">
          <h2>Contact Us <span><FontAwesomeIcon icon={faHeadphonesSimple} bounce style={{color: "#0c2757",}} /></span></h2>
          <p>
            For industry-leading construction chemicals with exceptional
            performance, Sharda Chemical is your trusted partner.
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact">Contact</label>
            <input type="number" id="contact" placeholder="Your Contact No." required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your E-mail" required />
          </div>

          <div className="contact-form-group textarea-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Please define your query"></textarea>
          </div>

          <div className="contact-buttons">
            <button type="submit" className="submit-btn">
              Submit <span><FontAwesomeIcon icon={faPaperPlane} /></span>
            </button>
            <button type="reset" className="reset-btn">
              Reset <span><FontAwesomeIcon icon={faRotateRight} spin /></span>
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="contact-right">
        <div className="contact-info-box">
          <div className="contact-info-header">
            <FontAwesomeIcon icon={faLocationDot} flip className="contact-icon" />
            <h4>Office Location</h4>
          </div>
          <p>Plot no 29, Old subhedar layout, Sharda Square, Nagpur-440024</p>
        </div>

        <div className="contact-info-box">
          <div className="contact-info-header">
            <FontAwesomeIcon icon={faEnvelope} beatFade className="contact-icon" />
            <h4>Email</h4>
          </div>
          <p>shardachemicals1@gmail.com</p>
        </div>

        <div className="contact-info-box">
          <div className="contact-info-header">
            <FontAwesomeIcon icon={faMobileScreenButton} shake className="contact-icon" />
            <h4>Phone Numbers</h4>
          </div>
          <p>+91 9423476195<br />+91 7083892200</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
