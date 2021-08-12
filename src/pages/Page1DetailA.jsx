import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";

export const Page1DetailA = () => {  
  const { state } = useLocation();
  const [arr, setArr] = useState([]);
  console.log(...arr);
  const [completeTodo, setCompleteTodo] = useState([]);
  console.log(completeTodo);

  useEffect(() => {
    if (state.arr) {
      setArr(state.arr);      
    } if (state.completeTodo) {
      setCompleteTodo(state.completeTodo);
    }
  },[state]);

  const olStyle = {
    listStylePosition: "inside",
    listStyleType: "cjk-ideographic",
    width: "40%",
    textAlign: "justify",
    padding: "auto",
    margin: "auto"
  }

  return (
    <div className="container-style">
      <h1>今からやること</h1>
      <br/>
      <ol style= {olStyle}>      
      {arr.map((val)=>(<li> {(val) } </li>)) }
      </ol>
      <br />
      
      <Link to={{ pathname:"/page1", state: { arr, completeTodo } }}>「やらなあかんこと」に戻る</Link>
      <br />
      <br />
      <BackButton color="green" />
    </div>
  );
};