import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
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
      <h1>やらなあかんこと　ＨＯＭＥ</h1>
      <Link to="/page1">「やらなあかんこと」はこちら</Link>
      <br />
      <Link to="/page2">「使い方」はこちら</Link>
    </div>
  );
};