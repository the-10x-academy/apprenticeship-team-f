import React from "react";
import Post from "./postDetails/postDetails"
import Header from "./../../header.jsx"

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
            return <Post name={item.username} location={item.location} description={item.comment} image={item.image} date={item.date} likes={item.likes}></Post> 
        })
    
     }
    
    return (
    <div>
         
      <div>

        <Header/>
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
