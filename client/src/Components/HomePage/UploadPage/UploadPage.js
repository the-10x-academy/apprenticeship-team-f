
import React from "react";
import "./UploadPage.css";
import {useState} from "react";
// import BrowseFile from "./BrowseFile.js";
import FileUpload from "./FileUpload.js";
// import App1 from "./App1.js";  

export default function UploadPage() {

  var post_className = "post_inert";

  function uploadFile () {
    // console.log("file upload initiated..");
    return (
        <FileUpload />
    );
  }  
  const [fileupload, setfileupload] = useState(false);

  return (
    <form className="form_class">
      <div className="first_div">
        <input className="file" type="text" placeholder="No file chosen" />
        <button className="browse" onClick={uploadFile}> Browse </button>
      </div>
      <br />
      <div className="second_div">
        <input className="author" type="text" placeholder="Author" />
        <input className="location" type="text" placeholder="Location" />
      </div>
      <br />
      <div className="third_div">
        <input className="description" type="text" placeholder="Description" />
      </div>
      <br />
      <button className={post_className}>Post</button>
    </form>
    )
};


