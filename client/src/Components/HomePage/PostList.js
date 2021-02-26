import React from "react";
import Post from "./postDetails/postDetails"
import Header from "./../../header.jsx"
import Upload from '../HomePage/FileUpload/FileUpload'

class PostList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      post:[],
      upload:false
    }
  }

  componentDidMount(){
    console.log('component did mount')
    setInterval(() => {
      fetch('http://localhost:9000/posts')
      .then(res=>{
        return res.json()
      })
      .then((xyz)=>{
        this.setState({post:xyz})
      })
    },500);
  } 

  toggleDisplay = () => {
    this.setState({
      upload:true
    })
  }
  render(){
    // console.log(this.state.post,'in render')
    let pl=null;
    if(this.state.post && !this.state.upload)
    {
        pl = this.state.post.map((item)=>{
            return <Post name={item.username} location={item.location} description={item.comment} image={item.image} date={item.date} likes={item.likes} id={item._id}></Post> 
        })
    
     }
     else{
       pl = <Upload toggleDisplay={this.toggleDisplay}/>
     }
     
    
    return (
    <div>
         
      <div>

      <Header toggleDisplay={this.toggleDisplay}/>
      </div> 

      <div> 
          <ul>
            {pl}  
          </ul>
      </div>

    </div>
    )

  }
}
export default PostList;  
