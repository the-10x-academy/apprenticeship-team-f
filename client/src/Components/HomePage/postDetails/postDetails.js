import React from "react";
import "./styles.css";


export default function postDetails(props) {

  props.authorName = "Siva";

  return (
    <div className="App">
      <h2 className="name">{props.authorName}</h2>
      {/* <img className="icon" src="https://th.bing.com/th/id/OIP.imRSM96SBMky2tzLclzAfAHaHa?w=204&h=204&c=7&o=5&dpr=1.2&pid=1.7"/>  */}
      <h6 className="place">Bengaluru</h6>
      <img className ="avatar" alt="" src={"https://th.bing.com/th/id/Rd58339de61b5d07fd4db988f8e8a7cdd?rik=1%2fUoNcqqIfTiXw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images..jpg&ehk=%2fG27fwqbQI%2fi%2bxgGclM1BHuObngpvsp27tc36F59T9c%3d&risl=&pid=ImgRaw"} />
      {/* <img className = "avatar" src = {"https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F76930476_615829235863602_3006944722208665730_n.jpg%3Foh%3D8d8479d4b4801710925aadc396763836%26oe%3D60177B5C&t=l&u=919701946881%40c.us&i=1582267486&n=9XwisWmQnQi9vcrTM%2Bkk4SxW1%2BjNF%2F1YldlYVG05AiE%3D"} /> */}
      <h6 className="date">10 Jan 2021</h6>
      <h6 className="likes">64 likes</h6>
      <h3 className="description">Kick start your career with a bang</h3>
    </div>
  );
}  

