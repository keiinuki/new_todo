import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";

export const Page1DetailB = () => {
  const { state } = useLocation();
  const [completeTodo, setCompleteTodo] = useState([]);
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
      {completeTodo.map((val)=>(<li> {(val) } </li>)) }
      <br />
      <Link to={{ pathname:"/page1", state: { completeTodo } }}>「やらなあかんこと」に戻る</Link>
      <br />      
      <br />
      <BackButton color="blue" />
    </div>
  );
};