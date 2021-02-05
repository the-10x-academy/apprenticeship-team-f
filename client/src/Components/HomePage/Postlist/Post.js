import React from "react"

export default function Post(props){
return (
<div>
    <h1> Name: {props.username}</h1>
    <h1>Location: {props.location}</h1>
    <h1>Comment: {props.comment}</h1>
</div>
);
}