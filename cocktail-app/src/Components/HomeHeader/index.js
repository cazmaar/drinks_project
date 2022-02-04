import React from "react";
import img from "../../images/img.png";
import imgheader from "../../images/imgheader.png";
import "./HomeHeader.css";
function HomeHeader() {
  return (
    <div>
      <div className="Nav">
        <img className="nameImage" alt="img2" src={imgheader} />
      </div>
      <div className="HomeHeader">
        <img className="img" src={img} alt="dd" />
        <h1 className="welcome">Welcome to TheCocktailDB</h1>
        <img className="img" src={img} alt="dd" />
      </div>
    </div>
  );
}

export default HomeHeader;
