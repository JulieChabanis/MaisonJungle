import React from "react";
import "./Banner.css"
import logo from "../../assets/logo.png"
import Recommandations from "./Recommandations";


const Banner = () => {

  return (
   <div className="lmj-banner">
    <img src={logo} alt="lmj" className="lmj-logo"></img>
    < Recommandations />

   </div>
  )
}

export default Banner;