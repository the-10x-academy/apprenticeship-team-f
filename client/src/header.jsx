import React from "react";
import "./header.css";
import img1 from "./Image/icon.png";
import img2 from "./Image/camera.png";
import { Link } from "react-router-dom";

const Header = (props) => (
	<div className="header">
		<div className="headericonandlogo">
			<img className="Iicon" src={img1} alt="Headericon" />

			<p className="linep">fotografia</p> 
		</div>

		{/* <Link to="/instaUpload" style={{ textDecoration: "none" }}> */}

		<img
			className="Icamera"
			src={img2}
			alt="cameraicon"
			onClick={props.toggleDisplay}
		/>

		{/* <FileUpload/> */}

		{/* </Link> */}
	</div>
);
export default Header;
