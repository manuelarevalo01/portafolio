import React from "react";
import { ReactComponent as IconFacebook } from "../../assets/icons/icons8-linkedin.svg";
import { ReactComponent as IconEmail } from "../../assets/icons/gmail.svg";
import { ReactComponent as IconWhatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as IconInstagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as IconGitHub } from "../../assets/icons/github.svg";
import { ReactComponent as IconTwitter } from "../../assets/icons/icons8-twitterx.svg";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../../App.css";

class Footer extends React.Component {
  render = () => {
    return (
      <>
        <div className="footer">
          <div className="item-footer">
            <div className="item-footer-contact">
              <FaPhoneSquareAlt></FaPhoneSquareAlt>
              <p className="items-contact">+57 300 2413760</p>
            </div>
            <div className="item-footer-contact">
              <FaRegEnvelope></FaRegEnvelope>
              <p className="items-contact">manferare1@gmail.com</p>
            </div>
            <div className="item-footer-contact">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <p className="items-contact">Bucaramanga - Santander</p>
            </div>
          </div>
          <div className="item-footer">
            <p>Contáctame en mis redes sociales:</p>
            <div className="social">
            <a
                href="https://github.com/manuelarevalo01"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGitHub className="ion ion-logo-github icon" />
              </a>
              <a
                href="https://www.instagram.com/manferare1"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram className="ion ion-logo-instagram icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/manuel-fernando-ar%C3%A9valo-navarro-9242b3138/"
                title="Linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook className="ion ion-logo-linkedin circle-line icon" />
              </a>
              <a
                href="mailto:manferare1@gmail.com"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconEmail className="ion ion-logo-gmail circle-line icon" />
              </a>
              <a
                href="https://twitter.com/manuelarevalo"
                title="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter className="ion ion-logo-twitter icon" />
              </a>
            
            </div>
          </div>
        </div>
        <div className="copyright-footer">
          <a
            className="wsp-content"
            href="https://api.whatsapp.com/send/?phone=573002413760&text&type=phone_number&app_absent=0"
            title="Whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <IconWhatsapp className="logo-wsp" />
          </a>
          <span>
            Copyright © manuelarevalo01 2023. All rights reserved.
            <p>
              Developed by_ 
              <a
                className="underlined"
                href="https://github.com/manuelarevalo01"
                target="_blank"
                rel="noopener noreferrer"
              >
                manuelarevalo01
              </a>
              .
            </p>
          </span>
        </div>
      </>
    );
  };
}
export default Footer;
