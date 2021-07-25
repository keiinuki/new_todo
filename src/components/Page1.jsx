import React from "react";
import { ToDoList } from './ToDoList';
import { Link } from "react-router-dom";

export const Page1 = (props) => {
  
  const containerstyle = {
    border: "solid 1px #ddd",
    textAlign: "center",
    padding: "auto",
    backgroundColor: "#ddd",
    width: "600px",
    height: "auto",
    margin: "auto"
  }
  return (
  <div style={containerstyle}>
    <h1>やらなあかんこと</h1>
    <div>
    < ToDoList />        
    </div>
    <div>
    <Link to="/page1/detailA">「今からやること」を確認する</Link>
      <br />
      <Link to="/page1/detailB">「もう終わったこと」を確認する</Link>
      <br />
      <br />
      <br />
      <Link to="/">TOPへ</Link>      
    </div>
  </div>
  );
};