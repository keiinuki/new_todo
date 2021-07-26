import React from "react";
import { Link } from "react-router-dom";

export const Page2 = () => {
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
      <h1>使い方</h1>
      <div>
        <input type="text" ></input>
        <br/>
        <input type="text" ></input>
      </div>
      <div>
    <Link to="/page2/:id">パラメーター画面へ</Link>
      <br />
      <br />
      <br />
      <Link to="/">TOPへ</Link>
      </div>
    </div>
  );
};