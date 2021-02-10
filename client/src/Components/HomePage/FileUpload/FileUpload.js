import React, { useRef, useState } from "react";
import axios from "axios";
import "./FileUpload.css";  
import Header from "../../../header";

function FileUpload() {

  const [file, setFile] = useState(
    {
      username:"",
      location:"",
      comment:"",
      image:"",
      likes:0
    }
  );
  
  function eventChange(event) {
    const {name, value} = event.target;  
    setFile(prevInput => {
      return(
        {
          ...prevInput,
          [name]:value
        })
    });
  }

  // const el = useRef(); // accesing input element

  const uploadFile = (e) => {
    e.preventDefault();
    console.log("file added");
    // setfileupload(true); 
    const formData = new FormData();
    formData.append('image',file.image);
    formData.append('username',file.username);
    formData.append('location',file.location);
    formData.append('comment',file.comment);
    formData.append('likes',file.likes);

    axios({
      method: 'post',
      url: 'http://localhost:9000/posts',
      data: formData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
    }


  // const [fileupload, setfileupload] = useState(false);

  // var isFilled = false;

  // if (file.comment !== "") {
  //   isFilled = true;
  // } 

  var post_state = "post_inert";

  // if (isFilled) {
  //   post_state = "post_active";
  // }  

  return (

    <div>
      <Header/>
      <form className="form_class">

        <div className="first_div">

          <input
            id="Upload" 
            type="file" 
            multiple="multiple" 
            value={file.image}
            name="image" 
            accept="image/*" 
            onChange={event => {
              console.log('picture selected',event)
              const image = event.target.files[0];
              setFile(image);
            }}>
          </input>  

          <label
            class="custom-file-input" 
            for="Upload"
          /> 

        </div> 


        <div className="second_div">

          <input
            onChange={eventChange}
            value={file.username}
            className="author"
            type="text"
            placeholder="Author"
          />


          <input
            onChange={eventChange}
            value={file.location}
            className="loc"
            type="text"
            placeholder="Location"
            />

        </div>

        <div className="third_div">

          <input
            onChange={eventChange}
            value={file.comment}
            className="des"
            type="text"
            placeholder="Description"
          />

        </div>

        <button
          className={post_state} 
          onClick={ () => uploadFile }
          > Post
        </button>  

      </form>

    </div>
  );
}

export default FileUpload;  