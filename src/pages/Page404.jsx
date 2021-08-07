import React from "react";
import { BackButton } from "../components/BackButton";

export const Page404 = () => {
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
      <h1>ページが見つからへんねん</h1>
      <br />
      <BackButton />
    </div>
  )
};