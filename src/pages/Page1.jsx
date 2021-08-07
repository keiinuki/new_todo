import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Page1 = () => {
  const { state } = useLocation();
  const [arr, setArr] = useState([]);
  const [word, setWord] = useState("");
  const [completeTodo, setCompleteTodo] = useState([]);  
  
    const onClickAdd = (e) => {
    e.preventDefault()        
    const newArr = [...arr];
    newArr.push(word);
    setArr(newArr);
    setWord("");
    alert("やることにしたで！");
    };

    const onClickDelete =(e,i) => {
      console.log(e)
      e.preventDefault();    
      const newArr = [...arr];
      newArr.splice(i,1);
      setArr(newArr);
      alert("やっぱりやめるわ．．．");
    };

    const onClickComplete =(e,i) => {
      e.preventDefault();
      const newArr = [...arr];
      newArr.splice(i,1);
      const newCompleteTodo = [...completeTodo, arr[i]];
      setArr(newArr);
      setCompleteTodo(newCompleteTodo);
      alert("やったった！");
    };
  
    const onClickBack =(e,i) => {
      e.preventDefault();
      const newCompleteTodo = [...completeTodo];
      newCompleteTodo.splice(i,1);
      const newArr = [...arr, completeTodo[i]];      
      setCompleteTodo(newCompleteTodo);
      setArr(newArr);
      alert("あかん！やり直しや．．．");
    };
    
    const competeStyle= {
      textDecoration:"line-through red" 
    }
  const containerstyle = {
    border: "solid 1px #ddd",
    textAlign: "center",
    padding: "auto",
    backgroundColor: "#ddd",
    width: "600px",
    height: "auto",
    margin: "auto"
  }

  useEffect(() => {
    if (state) {          
      setArr(state.arr);    
      console.log(state);  
    } else  if (state) {
      setCompleteTodo(state.completeTodo);
    }
  },[state]);
  


  return (
  <div style={containerstyle}>
    <h1>やらなあかんこと</h1>
    <div>
    <div>
        <p>
          <h2>今からやるで！</h2>
          </p>
        <form>
        <input type="text" onChange={(e) => {
          setWord( e.target.value)
          console.log(e)
          }} value= {word} placeholder="何やるか決めた？"/>        
        <button onClick={onClickAdd} >やるで！</button>
        <li>例）花に水をやる</li>
        {arr.map((val,i)=>(<li> {(val) } <button onClick={(e) => onClickComplete(e,i)}>やったで！</button><button  onClick={(e) => onClickDelete(e,i)} >やめとくわ...</button></li>)) } 
        </form>     
        </div>
        <div>
          <p>
            <h2>もう終わったで！</h2>
            </p>
        {completeTodo.map((val,i)=>(<li style={competeStyle}>{(val)} <button onClick={(e) => onClickBack(e,i)}>やり直さな！</button></li>))}  
        </div>         
    </div>
    <div>
    <Link to={{ pathname:"/page1/detailA", state: { arr } }}>「今からやること」を確認する</Link>
      <br />
      <Link to={{ pathname:"/page1/detailB", state: { completeTodo } }}>「もう終わったこと」を確認する</Link>
      <br />
      <br />
      <br />
      <Link to="/">TOPへ</Link>      
    </div>
  </div>
  );
};