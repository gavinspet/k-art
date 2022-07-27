import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>K-Art</h1>
        <p>tum art hoe</p>

        <p>Copyrights 2022 &copy; lolwhoocaress</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/lolwhoocaress">Instagram</a>
        <a href="https://www.youtube.com/channel/UCOi9dtrdlvUd7w7xsVh6bJA">Youtube</a>
        <a href="http://fb.com/kkg">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
