import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item1">
          <h1>Links</h1>
          <a href=""><span>FAQ</span></a>
          <a href=""><span>Pages</span></a>
          <a href=""><span>Stores</span></a>
          <a href=""><span>Compare</span></a>
          <a href=""><span>Cookies</span></a>
        </div>
        <div className="item2">
          <h1>About</h1>
          <span>
          Welcome to Mass Sales, a brand dedicated to providing high-quality cotton bedsheets and women's clothing. Our brand takes 
          pride in offering products that are both luxurious and affordable. Our cotton bedsheets are made from the finest quality 
          cotton fibers, ensuring a soft and comfortable sleeping experience. We use only high thread count fabrics to ensure that 
          our sheets are durable, long-lasting, and maintain their softness after multiple washes. Our bedding sets come in a variety 
          of colors and patterns to suit every taste, from classic neutrals to bold prints.
          
          In addition to our bedding sets, we also offer a wide range of women's clothing. Our clothing is made with the same attention 
          to detail as our bedsheets, using only high-quality fabrics and impeccable craftsmanship. Whether you're looking for casual 
          wear or something more formal, we have something for every occasion. Our clothing range includes everything from stylish 
          dresses and comfortable loungewear to chic separates and elegant evening wear. At Mass Sales, we believe that everyone 
          deserves to enjoy the comfort and luxury of high-quality bedding and clothing. That's why we offer our products at 
          affordable prices, without compromising on quality. We are committed to providing our customers with exceptional customer
           service, so you can shop with confidence knowing that you'll receive the best possible experience.
           
           Thank you for choosing Mass Sales for your bedding and clothing needs. We hope you enjoy our products as much as we enjoy 
           creating them.
          </span>
        </div>
        <div className="item3">
          <h1>Contact</h1>
          <span>
            <img src="https://cdn-icons-png.flaticon.com/512/1334/1334110.png" alt="" />
            <a href="mailto:mass.sales.interior@gmail.com">mass.sales.interior@gmail.com</a>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Mass Sales</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;