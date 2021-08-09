import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";
import './PagesStyle.css';

export const Page1DetailB = () => {
  const { state } = useLocation();
  const [arr, setArr] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  console.log(completeTodo);  
  
  useEffect(() => {
    if (state.completeTodo) {
      setCompleteTodo(state.completeTodo);
    } if (state.arr) {
      setArr(state.arr);      
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
      <h1>もう終わったこと</h1>
      <br />
      <ol style= {olStyle}>      
      {completeTodo.map((val)=>(<li> {(val) } </li>)) }
      </ol>
      <br />
      <Link to={{ pathname:"/page1", state: { arr, completeTodo } }}>「やらなあかんこと」に戻る</Link>
      <br />      
      <br />
      <BackButton color="blue" />
    </div>
  );
};