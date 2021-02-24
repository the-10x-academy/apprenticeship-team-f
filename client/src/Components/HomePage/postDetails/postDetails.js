import React from "react";
import {useState} from "react";
import "./postDetails.css";
import more_icon from "./icons/more_icon.svg";
import likes_icon from "./icons/heart.png";
// import red_heart from "./icons/red_heart.jfif";
import share_icon from "./icons/share.png";

export default function PostDetails(props) {

	const [del, setDel] = useState(false);
	function DelPost() { 
		return(
			<div>
				<button className = "deletePost" onClick={deletePost}>Delete</button>
			</div>
		)
	}

	const deletePost = async (e) => {
		const data = new FormData();
		data.append("_id", props.id);
		console.log(props.id);
		fetch("http://localhost:9000/posts/delete/" + props.id, {
			method: "POST",
			body: data,
		})
			.then(function (res) {
				return res.json();
			})
			.catch(function (err) {
				console.log("error is ", err);
			});
		setDel(false);
	};

	// const [liked, setLiked] = useState(false);
	const likesbutton = (e) => {
		// setLiked(true);
		const data = new FormData();
		data.append("id", props.id);
		fetch("http://localhost:9000/posts/" + props.id, {
			method: "PUT",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div className="Page" onClick={()=>del ? setDel(false): {}} >
			<div className="App">
				<div className="headSection">
					<div className="nameLocation">
						<h1 className="name"> {props.name} </h1>
						<h2 className="location1"> {props.location} </h2>
					</div>
					<div className="threedotAndDelete">
					<img
						className="moreIcon"
						alt=""
						src={more_icon}
						onClick={()=>del ? setDel(false) : setDel(true)}
					/>
					{del ? <DelPost/> : <p></p>}
					</div>
				</div>

				<img
					className="avatar"
					alt=""
					src={`http://localhost:9000/${props.image}`}
				/>
				<div className="footSection">
					<div className="likesShareDate">
						<div className="likesShare">
							<img
								className="likesIcon"
								alt=""
								src = {likes_icon}
								onClick={
									likesbutton
								}
							/>
							<img className="shareIcon" alt="" src={share_icon} />
						</div>
						<h6 className="date"> {props.date} </h6>
					</div> 

					<div>
						<h6 className="likes"> {props.likes} likes </h6>
					</div>

					<div className="fixed">
						<h3 className="description2"> {props.description} </h3>
					</div>
				</div>
			</div>
		</div>
	);
}
