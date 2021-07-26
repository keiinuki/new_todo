import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Page1DetailB = () => {
  const { state } = useLocation();
  const [completeTodo, setCompleteTodo] = useState();
  console.log(completeTodo);
  useEffect(() => {
    if (state) {
      setCompleteTodo(state.completeTodo);
    }
  },[state]);

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
      <h1>もう終わったこと</h1>
      <br />
      <li>{ completeTodo }</li>
      <br />
      <Link to="/page1">「やらなあかんこと」に戻る</Link>
      <br />      
      <br />
      <Link to="/">TOPへ</Link>
    </div>
  );
};