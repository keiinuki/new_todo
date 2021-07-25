import React from "react";
import { Link, useParams, useLocation }  from "react-router-dom";

export const Parameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>ここにパラメータが遷移されます</h1>
      <p>id:{id}</p>
      <p>name:{query.get("name")}</p>
      <br />
      <Link to="/page2">「使い方」に戻る</Link>
      <br />
      <br />
      <Link to="/">TOPへ</Link>
    </div>
  );
};