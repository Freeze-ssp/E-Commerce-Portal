import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div id="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input type="text" placeholder="Enter your e-mail..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <a href="https://www.facebook.com/profile.php?id=100064095547047"><FacebookIcon /></a>
          <a href="https://instagram.com/mass.sales.interior?igshid=ZDdkNTZiNTM="><InstagramIcon /></a>
          <a href=""><GoogleIcon /></a>
          <a href=""><PinterestIcon /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;