import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
function HomePage() {
	return (
		<div className="HomePage">
			<div className="leftSection">
				<img src="/lens-1418954@2x.png" className="homePage-img" alt="" />

				<div className="rightSection">
					<div className="rightSectionContent">
						<center>
							<h1 className="teamHeading">10x Team 06</h1>
							<Link to="/insta" style={{ textDecoration: "none" }}>
								<button className="enter-btn"> Enter </button>
							</Link>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
}
export default HomePage;

