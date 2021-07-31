import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
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
      <h1>ページが見つからへんねん</h1>
      <br />
      <Link to="/">TOPへ</Link> 
    </div>
  )
};