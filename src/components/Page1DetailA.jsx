import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Page1DetailA = () => {  
  const { state } = useLocation();
  const [arr, setArr] = useState([]);
  console.log(...arr);

  useEffect(() => {
    if (state) {
      setArr(state.arr);      
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
      <h1>今からやること</h1>
      <br/>      
      <li>{ arr }</li>
      <br />
      <Link to={{ pathname:"/page1", state: { arr } }}>「やらなあかんこと」に戻る</Link>
      <br />
      <br />
      <Link to="/">TOPへ</Link> 
    </div>
  );
};