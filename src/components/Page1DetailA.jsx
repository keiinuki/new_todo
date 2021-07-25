import React from "react";
import { Link } from "react-router-dom";

export const Page1DetailA = () => {
  return (
    <div>
      <h1>今からやること</h1>
      <br />
      <Link to="/page1">「やらなあかんこと」に戻る</Link>
      <br />
      <br />
      <Link to="/">TOPへ</Link> 
    </div>
  );
};