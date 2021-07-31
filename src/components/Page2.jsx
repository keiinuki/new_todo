import React from "react";
import { useState } from "react"
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
  };

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const onChangeName = (e) => setName(e.target.value);
  const onChangeId = (e) => setId(e.target.value);
  const onClick = () => {
  console.log(name);
  console.log(id);
  
  };



  return (
    <div style={containerstyle}>
      <h1>使い方</h1>
      <div>
        <input label="名前" value={name} onChange={onChangeName} /> 
        <br/>
        <input label="ID" value={id} onChange={onChangeId} />
        <button onClick={onClick}>ボタン</button>
      </div>
      <div>{name}  {id}</div>
      <div>
    <Link to="/page2/:id?name=name">パラメーター画面へ</Link>
      <br />
      <br />
      <br />
      <Link to="/">TOPへ</Link>
      </div>
    </div>
  );
};