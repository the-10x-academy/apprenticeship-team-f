//import logo from "../../logo.svg";
import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function HomePage() {
    return (
    < div className="HomePage" >
        <div className="leftSection">
            <img src="/lens-1418954@2x.png" className="homePage-img" alt="" />
        </div>
        <div className="rightSection">
            <div className="rightSectionContent">
                <h1 className="teamHeading">10x Team 06</h1>
                <Link to="/insta" style={{ textDecoration: "none" }}>
                    <button className="enter-btn"> Enter </button>
                </Link>
            </div>
        </div>
    </div>
    );
}
export default HomePage;  