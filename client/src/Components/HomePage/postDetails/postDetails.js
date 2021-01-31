import React from "react";
import "./PostDetails.css";
import more_icon from "./icons/more_icon.svg";
import likes_icon from "./icons/heart.png";
import share_icon from "./icons/share.png";


export default function postDetails() {
  return (
    <div className="page">
    <div className="App">  

      <div className="head_section">

          <div>
           <p  className="name">        Siva         </p>
          </div>
          
          <div className="more_icon_class">
            <img className="more_icon"   alt=""       src={more_icon} />
          </div>

          <div>
            <p  className="place">       Bengaluru    </p>
          </div>  

      </div>  

      <div className="avatar_class">
        <img  className="avatar"     alt=""       src={"https://th.bing.com/th/id/Rd58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw"} />
      </div>
      
      <div className="likes_share_date">

        <div  className="likes_share">
          <img className="likes_icon"   alt=""       src={likes_icon} />
          <img className="share_icon"   alt=""       src={share_icon} />
        </div>

        <div className="date">
          <h4>  10 Jan 2021  </h4>
        </div>

      </div>  

      <h4  className="likes">       64 likes     </h4>
      <h3  className="description"> Kick start your career with a bang</h3>

    </div>
    </div>
  );
}  


// export default function postDetails(props) {
//   return (
//     <div   className="App">
//       <h2  className="name">        {props.authorName}   </h2>
//       <img className="more_icon"    alt=""               src={more_icon} />
//       <h6  className="place">       {props.place}        </h6>
//       <img className="avatar"       alt=""               src={props.image} />
//       <img className="likes_icon"   alt=""               src={likes_icon} />
//       <img className="share_icon"   alt=""               src={share_icon} />
//       <h6  className="date">        {props.date}         </h6>
//       <h6  className="likes">       {props.likes}        </h6>
//       <h3  className="description"> {props.description}  </h3>
//     </div>
//   );
// }  









