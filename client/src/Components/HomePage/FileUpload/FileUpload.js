import React from "react";
import "./FileUpload.css";
// import Header from "../../../header";
// import { Link } from "react-router-dom";

class FileUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: "",
			location: "",
			author: "",
			fileName: "",
			allFilled: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.fileInput = React.createRef();
	}
	checkFilled = () => {
		console.log(this.state.description, "1");
		console.log(this.state.location, "2");
		console.log(this.state.author, "3");
		console.log(this.state.fileName, "4");
		if (
			this.state.description &&
			this.state.location &&
			this.state.author &&
			this.state.fileName &&
			!this.state.allFilled
		) {
			this.setState({
				allFilled: true,
			});
		}
	};
	handleClick(event) {
		event.preventDefault();
		this.fileInput.current.click();
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });

		if (event.target.name === "file") {
			let name = event.target.value.split("\\");
			this.setState({ fileName: name[name.length - 1] });
		}
	}
	handleSubmit(event) {
		var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.jfif)$/;
		console.log("test console");
		if (allowedExtensions.exec(this.fileInput.current.files[0].name)) {
			console.log("in the clicked");
			const formData = new FormData();
			formData.append("username", this.state.author);
			formData.append("location", this.state.location);

			formData.append("comment", this.state.description);
			formData.append("image", this.fileInput.current.files[0]);
			formData.append("date",Date())
			fetch("http://localhost:9000/posts", {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then(() => {
					this.props.toggleDisplay();
				})

				.catch((error) => {
					console.error("Error:", error);
				});
		} else {
			event.preventDefault();
			alert("Error: File Not Supported");
		}
	}
	render() {
		this.checkFilled();
		console.log(this.state.allFilled);
		return (
			<div className="box">
				<form onSubmit={this.handleSubmit}>
					<div className="line line1">
						<input
							type="text"
							disabled={true}
							className="file"
							placeholder=" No file chosen"
							value={this.state.fileName}
						/>
						<input
							type="file"
							ref={this.fileInput}
							accept="image/*"
							hidden
							name="file"
							className="file-btn"
							onChange={this.handleChange.bind(this)}
						/>
						<button className="browse" onClick={this.handleClick.bind(this)}>
							Browse
						</button>
					</div>

					<div className="line line2">
						<input
							type="text"
							placeholder=" Author"
							className="author"
							name="author"
							value={this.state.author}
							onChange={this.handleChange.bind(this)}
						/>

						<input
							type="text"
							placeholder=" Location"
							className="location"
							name="location"
							value={this.state.location}
							onChange={this.handleChange.bind(this)}
						/>
					</div>

					<div className="line line3">
						<input
							type="text"
							placeholder=" Description"
							name="description"
							className="description4"
							value={this.state.description}
							onChange={this.handleChange.bind(this)}
						/>
					</div>
					{/* <Link to='/insta' > */}
					<div className="line line4">
						<input
							type="submit"
							value="Post"
							className="post"
							disabled={
								!this.state.author ||
								!this.state.location ||
								!this.state.description ||
								!this.state.fileName
							}
							// onClick={this.handleSubmit}
							style={
								this.state.allFilled
									? { backgroundColor: "#1833db", color: "white" }
									: { backgroundColor: "#f0f0f0" }
							}
						/>
					</div>
					{/* </Link> */}
				</form>
			</div>
		);
	}
}
export default FileUpload;
