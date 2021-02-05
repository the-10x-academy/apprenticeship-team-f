import React from "react";
import "./postDetails.css";
import more_icon from "./icons/more_icon.svg";
import likes_icon from "./icons/heart.png";
import share_icon from "./icons/share.png";


export default function postDetails(props) {
  return (
    <div className="App">
      <div className="headSection">


        <div className="nameLocation">
          <h1  className="name">        {props.name}  			 </h1>
          <h2  className="location">    {props.location}     </h2>
        </div>

        <div className="moreIconClass">
          <img className="moreIcon"     alt=""               src={more_icon} /> 
        </div>  


      </div>  


      <div className="midSection">  

       
        <img className="avatar"         alt=""               src={props.image} />
    

      </div> 


      <div className="footSection">
      
      
        <div className="likesShareDate">
          <div className="likesShare">
            <img className="likesIcon"  alt=""               src={likes_icon} />
            <img className="shareIcon"  alt=""               src={share_icon} />
          </div>
          <h6  className="date">        {props.date}         </h6>
        </div>

        <div>
          <h6  className="likes">       {props.likes}        </h6>
        </div> 

        <div>
          <h3  className="description"> {props.description}  </h3>
        </div> 
      
      
      </div>
    </div>
  );
}



