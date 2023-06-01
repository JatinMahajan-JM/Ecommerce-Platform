import React, { useState } from "react";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import "./Slider.css";
// const Slider = ({slides}) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length-1 ? 0: current+1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length-1 : current-1);
//   }
// };

export default function Slider(props) {
  const [current, setCurrent] = useState(1);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length ? 1 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };

  const moveDot = index => {
    setCurrent(index)
  }

  return (
    <div>
    <div className="container-slider">

      {props.slides.map((slide, index) => {
        return (
        <div key={index} className={current === index+1 ? "slide active-anim" : "slide"}>

          <img src={(slide.image)}/>
        </div>
        )
      })}

      <div className="container-dots">
      {Array.from({length: 3}).map((item, index) => (
        <div key={index}
        onClick={() => moveDot(index + 1)}
        className={current === index + 1 ? "dot active" : "dot"}
        ></div>
      ))}
      </div>
    </div>
    <Section1/>
    <Section2/>
    </div>
  );
}
