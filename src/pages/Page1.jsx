import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BackButton } from "../components/BackButton";
import './PagesStyle.css';

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

  const olStyle = {
    listStylePosition: "inside",
    listStyleType: "cjk-ideographic",
    width: "60%",
    textAlign: "justify",
    padding: "auto",
    margin: "auto"
  }

  const buttonStyle = {
    padding: "auto",
    margin: "2px",
    justifyContent: "float-right"
  }

  useEffect(() => {
    if (state.arr) {          
      setArr(state.arr);    
      console.log(state);  
    } if (state.completeTodo) {
      setCompleteTodo(state.completeTodo);
    }
  },[state]);

  return (
  <div className="container-style">
    <h1>やらなあかんこと</h1>
    <div>
      <div>        
        <h2>今からやるで！</h2>        
        <form>
          <input type="text" onChange={(e) => {
            setWord( e.target.value)
            console.log(e)
          }} value= {word} placeholder="何やるか決めた？"/>        
          <button style={buttonStyle} onClick={onClickAdd} >やるで！</button>
        </form>
        <div>          
            <li>例）花に水をやる</li>
          <ol style= {olStyle}>
            {arr.map((val,i)=>(<li> {(val)} <button style={buttonStyle} onClick={(e) => onClickComplete(e,i)}>やったで！</button><button style={buttonStyle} onClick={(e) => onClickDelete(e,i)} >やめとくわ...</button></li>)) } 
          </ol>
        </div>     
      </div>
        
      <div>
        <br />          
          <h2>もう終わったで！</h2>          
          <ol style= {olStyle}>
        {completeTodo.map((val,i)=>(<li style={competeStyle}>{(val)} <button style={buttonStyle} onClick={(e) => onClickBack(e,i)}>やり直さな！</button></li>))}  
        </ol>
      </div>             
    </div>
    <div>
      <br />
      <br />
    <Link to={{ pathname:"/page1/detailA", state: { arr, completeTodo } }}>「今からやること」を確認する</Link>
      <br />
      <Link to={{ pathname:"/page1/detailB", state: { arr, completeTodo } }}>「もう終わったこと」を確認する</Link>
      <br />
      <br />
      <br />
      <BackButton color="orange" />    
    </div>
  </div>
  );
};