import React from "react";
import "./Section1.css";
import Image1 from "../../images/section1img1.jpg";
import Image2 from "../../images/section1img2.jpg";
import Image3 from "../../images/section1img3.jpg";
import Image4 from "../../images/section1img4.jpg";

export default function Section1() {
  return (
    <div className="grid-container">
      <div className="items item-1">
        <div className="img img-1">
          <img src={Image1} className="hover" alt="" />
          <div className="Abutton button-1">Women</div>
        </div>
      </div>

      <div className="items item-2">
        <div className="img img-2">
          <img src={Image2} className="hover" alt="" />
          <div className="Abutton button-2">Accessories</div>
        </div>
        <div className="img img-3">
          <img src={Image3} className="hover" alt="" />
          <div className="Abutton button-3">Footwear</div>
        </div>
      </div>
      <div className="items item-3">
        <div className="img img-4">
          <img src={Image4} className="hover" alt="" />
          <div className="Abutton button-4">Watches</div>
        </div>
      </div>
    </div>
  );
}
