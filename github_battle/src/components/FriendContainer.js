import React, { Component } from 'react';
import ShowList from './ShowList.js';

class FriendContainer extends Component{
render(){
  var name = "Tyler";
  var list = ["Sai", "Krishna", "Undurthi"];
  return(
    <div>
      <h3> Name: {name} </h3>
      <ShowList list={list} />
    </div>
  )
}
}



export default FriendContainer;
