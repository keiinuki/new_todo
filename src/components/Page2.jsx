import React from "react";
import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>使い方</h1>
      <div>
        <input type="text" ></input>
        <br/>
        <input type="text" ></input>
      </div>
      <div>
    <Link to="/page2/:id">パラメーター画面へ</Link>
      </div>
    </div>
  );
};