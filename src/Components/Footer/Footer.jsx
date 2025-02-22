import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import facebook_icon from "../../assets/facebook_icon.png";
import insta_icon from "../../assets/insta_icon.png";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
      <div className="footer-1">
        <div className="footer-1-head">
          <FontAwesomeIcon icon={faLocationDot} flip className="contact-icon" />
          <h4>Office Location</h4>
        </div>
        <p>Plot no 29, Old subhedar layout, Sharda Square, Nagpur-440024</p>
        <div className="footer-1-head2">
          <FontAwesomeIcon icon={faEnvelope} beatFade className="contact-icon" />
          <h4>Email</h4>
        </div>
        <p>shardachemicals1@gmail.com</p>
      </div>
      <div className="footer-2">
        <div className="footer-2-head">
          <FontAwesomeIcon icon={faMobileScreenButton} shake className="contact-icon" />
          <h4>Phone Numbers</h4>
        </div>
        <p>+91 9423476195<br />+91 7083892200</p>
      </div>
      <div className="footer-3">
        <div className="footer-3-head">
          <h4>CONNECT WITH US</h4>
        </div>
        <div className="footer-3-icons">
          <img src={facebook_icon} alt="facebook" />
          <img src={insta_icon} alt="instagram" />
        </div>
      </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Sharda Chemicals. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
