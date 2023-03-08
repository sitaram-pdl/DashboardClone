import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <p>
        Copyright © 2022 <span>Valex</span> . Designed with{" "}
        <ion-icon name="heart"></ion-icon>
        by <span>Spruko</span> All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
