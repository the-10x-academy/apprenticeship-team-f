import React from "react";
import "./header.css";
import img1 from "./Image/icon.png"
import img2 from "./Image/camera.png"

const Header =()=>(
    <div className="header">
        <img className="Iicon" src={img1} alt="Headericon"/>
        <p className="line">Instaclone</p>
        <img className="Icamera" src={img2} alt="cameraicon"/>

    </div>
)
export default Header;