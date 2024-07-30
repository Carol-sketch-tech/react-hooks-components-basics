import React from "react";

function Comment() {
  return <div>Naturally, I agree with this article.</div>;
}

export default Comment;
// example of an arrow functional compnent syntax
 const Comment =()=> <div>Naturally, I agree witht his article.</div>

//  example of a class component looks like this :
class Comment extends React.Component {
  render(){
    return<div>Naturally, I agree with this article.</div>
  }
}