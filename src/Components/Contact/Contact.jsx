import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLocationDot, faEnvelope, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons"
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
      {/* -------Left Side------------ */}
        <div className="contact-left">
            {/* -----Heading-------- */}
            <div className="contact-heading">
                <h2>Contact Us</h2>
                <p>For industry-leading construction chemicals with exceptional performance, Sharda Chemical is your trusted partner.</p>
            </div>
            {/* -------------Contact form------------ */}
            <div className="contact-form">
                <div className="contact-form-name">
                    <p>Name<input type="text" placeholder="Your Name"/></p>
                </div>
                <div className="contact-form-contact">
                    <p>Contact<input type="number" placeholder="Your Contact No." /></p>
                </div>
                <div className="contact-form-email">
                    <p>Email<input type="email" placeholder="Your E-mail" /></p>
                </div>
                <div className="contact-form-message">
                    <p>message <input type="text" placeholder="Your Message"/></p>
                </div>
            </div>
        </div>


        {/* ---------Right Side----------- */}
        <div className="contact-right">
            {/* ----------Location---------- */}
            <div className="contact-right-loc">
                <div className="contact-loc-head">
                    <FontAwesomeIcon icon={faLocationDot} style={{color: "#d4af37",}} />
                    <h4>Company Location</h4>
                </div>
                <p>Plot no 29, Old subhedar layout sharda square Nagpur-440024</p>
            </div>
            {/* -----------Email-------------- */}
            <div className="contact-right-email">
                <div className="contact-email-head">
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#d4af37",}} />
                    <h4>Email</h4>
                </div>
                <p>shardachemicals1@gmail.com</p>
            </div>
            {/* -----------Phone-------------- */}
            <div className="contact-right-phone">
                <div className="contact-phone-head">
                    <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#d4af37",}} />
                    <h4>Phone Numbers</h4>
                </div>
                <p>+91 9423476195<br />
                +91 7083892200
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact
