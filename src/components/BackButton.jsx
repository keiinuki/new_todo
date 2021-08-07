import React from "react";
import { memo } from "react"
import { useHistory } from "react-router-dom";

export const BackButton = memo((props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  return <button onClick={onClick} >TOPページに戻るで！</button>
});