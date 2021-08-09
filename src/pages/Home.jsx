import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './PagesStyle.css';

export const Home = () => {
  //const containerstyle = {
   // border: "solid 1px #ddd",
    //textAlign: "center",
    //padding: "auto",
   // backgroundColor: "#ddd",
   // width: "600px",
    //height: "auto",
    //margin: "auto"
  //}
  const history = useHistory();
  const onClick = () => {
    history.push("/page2");
  }
  return (
    <div className="container-style">
      <h1>やらなあかんこと　ＨＯＭＥ</h1>

      <div>
        <Link to="/page1">「やらなあかんこと」はこちら</Link>
        <br />
        <Link to="/page2">「登録してな」はこちら</Link>      
      </div>
        <br/>
      <div>
        <button onClick={onClick}>Page2へ移動</button>
      </div>
    </div>
  );
};