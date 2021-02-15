import React, { useRef, useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import Header from "../../../header";

const uploadFile = (e, file) => {
	e.preventDefault();
	// setfileupload(true);
	var formData = new FormData();
	formData.append("image", file.image);
	formData.append("username", file.username);
	formData.append("location", file.location);
	formData.append("comment", file.comment);
	formData.append("likes", file.likes);
	console.log("formData", formData);

	axios({
		method: "post",
		url: "http://localhost:9000/posts",
		data: formData,
		headers: { "Content-Type": "multipart/form-data" },
	})
		.then(function (response) {
			//handle success
			console.log(response);
		})
		.catch(function (response) {
			//handle error
			console.log(response);
		});
};

function FileUpload() {
	const [file, setFile] = useState({
		image: "",
		username: "",
		location: "",
		comment: "",
		likes: 0,
	});

	const eventChange = (event) => {
		const { name, value } = event.target;
		setFile((prevInput) => {
			return {
				...prevInput,
				[name]: value,
			};
		});
	};

	const fileChangeEvent = (event) => {
		const file = event.target.files[0];
		setFile((prevInput) => {
			return {
				...prevInput,
				image: file,
			};
		});
	};

	// const el = useRef(); // accesing input element

	// const [fileupload, setfileupload] = useState(false);

	var [isFilled, setIsFilled] = useState(false);
	var [postState, setPostState] = useState("post_inert");

	if (
		file.comment !== "" &&
		file.comment !== "undefined" &&
		file.image !== "" &&
		file.image !== "undefined" &&
		file.location !== "" &&
		file.location !== "undefined" &&
		file.username !== "" &&
		file.username !== "undefined"
	) {
		console.log(file.username, file.image, file.location, file.comment);
		setIsFilled(true);
	}

	if (isFilled) {
		setPostState("post_active");
	}

	return (
		<div>
			<Header />
			<form className="form_class">
				<div className="first_div">
					<input
						id="Upload"
						type="file"
						// multiple="multiple"
						value={file.name}
						name="image"
						accept="image/*"
						onChange={() => fileChangeEvent}
					></input>

					<label class="custom-file-input" for="Upload" />
				</div>

				<div className="second_div">
					<input
						name="username"
						onChange={(event) => eventChange(event)}
						value={file.username}
						className="author"
						type="text"
						placeholder="Author"
					/>

					<input
						name="location"
						onChange={(event) => eventChange(event)}
						value={file.location}
						className="loc"
						type="text"
						placeholder="Location"
					/>
				</div>

				<div className="third_div">
					<input
						name="comment"
						onChange={(event) => eventChange(event)}
						value={file.comment}
						className="des"
						type="text"
						placeholder="Description"
					/>
				</div>

				<button
					className={postState}
					onClick={(event) => uploadFile(event, file)}
				>
					{" "}
					Post
				</button>
			</form>
		</div>
	);
}

export default FileUpload;
