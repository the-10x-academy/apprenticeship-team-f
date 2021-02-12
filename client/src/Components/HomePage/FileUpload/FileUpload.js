import React, { useRef, useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import Header from "../../../header";

const uploadFile = (file) => {
	// e.preventDefault();
	console.log("file ", file);
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

	function eventChange(event) {
		const { name, value } = event.target;
		console.log("event ", event);
		setFile((prevInput) => {
			console.log("prevInput", prevInput);
			console.log(file);
			return {
				...prevInput,
				[name]: value,
			};
		});
		console.log("file reset");
	}

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
						onChange={(event) => {
							console.log("picture selected");
							const file = event.target.files[0];
							console.log(file);
							setFile((prevInput) => {
								console.log("prevInput", prevInput);
								console.log(file);
								return {
									...prevInput,
									image: file,
								};
							});
							// setFile(file);
							// onChange={eventChange}
						}}
					></input>

					<label class="custom-file-input" for="Upload" />
				</div>

				<div className="second_div">
					<input
						name="username"
						onChange={eventChange}
						value={file.username}
						className="author"
						type="text"
						placeholder="Author"
					/>

					<input
						name="location"
						onChange={eventChange}
						value={file.location}
						className="loc"
						type="text"
						placeholder="Location"
					/>
				</div>

				<div className="third_div">
					<input
						name="comment"
						onChange={eventChange}
						value={file.comment}
						className="des"
						type="text"
						placeholder="Description"
					/>
				</div>

				<button className={postState} onClick={uploadFile(file)}>
					{" "}
					Post
				</button>
			</form>
		</div>
	);
}

export default FileUpload;
