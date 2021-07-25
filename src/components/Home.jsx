import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>やらなあかんこと　ＨＯＭＥ</h1>
      <Link to="/page1">「やらなあかんこと」はこちら</Link>
      <br />
      <Link to="/page2">「使い方」はこちら</Link>
    </div>
  );
};