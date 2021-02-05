import React from "react";
import Post from "../HomePage/Postlist/Post"

class PostList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      post:[]
    }
  }
  componentDidMount(){
      fetch("http://localhost:9000/posts")
      .then((res)=>{
          return res.json()
       })
      .then((xyz)=>{
          this.setState({post:xyz.postData})
          //console.log(post)
          
      })
  }
  render(){
    let pl=null;
    if(this.state.post)
    {
        pl = this.state.post.map((item)=>{
            return <Post username={item.username} location={item.location} comment={item.comment} ></Post> 
        })
    
     }
    
    return <ul>
        {pl}
    </ul>
    }

}
export default PostList