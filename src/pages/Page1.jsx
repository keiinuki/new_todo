import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { BackButton } from "../components/BackButton";
//import { useTodoData } from "../Hooks/UseTodoData";

export const Page1 = () => {
  const { state } = useLocation();
  const [arr, setArr] = useState([]);
  const [word, setWord] = useState("");
  const [completeTodo, setCompleteTodo] = useState([]);  
  const [post, setPost] = useState("");
  //const { onClickAdd, onClickDelete, onClickComplete, onClickBack } = useTodoData();
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/29/")
    .then((response) => {      
      setPost(response.data.title)
    });    
  },[]);
  
  //useEffect(() => {
    //onClickAdd();
    //onClickDelete();
    //onClickComplete();
    //onClickBack();
  //},[ onClickAdd, onClickDelete, onClickComplete, onClickBack]);

  const onChangeAdd = (e) => {
    e.preventDefault() 
    setWord( e.target.value )   
  };

  const onClickAdd = useCallback((e) => {
    e.preventDefault()        
    const newArr = [...arr];
    newArr.push(word);
    setArr(newArr);
    setWord("");
    alert("やることにしたで！");
  },[arr,word]);

  const onClickDelete = useCallback((e,i) => {
    console.log(e)
    e.preventDefault();    
    const newArr = [...arr];
    newArr.splice(i,1);
    setArr(newArr);
    alert("やっぱりやめるわ．．．");
  },[arr]);

  const onClickComplete = useCallback((e,i) => {
    e.preventDefault();
    const newArr = [...arr];
    newArr.splice(i,1);
    const newCompleteTodo = [...completeTodo, arr[i]];
    setArr(newArr);
    setCompleteTodo(newCompleteTodo);
    alert("やったった！");
  },[arr, completeTodo]);
  
  const onClickBack = useCallback((e,i) => {
    e.preventDefault();
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(i,1);
    const newArr = [...arr, completeTodo[i]];      
    setCompleteTodo(newCompleteTodo);
    setArr(newArr);
    alert("あかん！やり直しや．．．");
  },[arr, completeTodo]);

  const buttonStyle = {
    padding: "auto",
    margin: "2px",
    justifyContent: "float-right"
  }

  useEffect(() => {
    if (state) {          
      setArr(state.arr);    
    } if (state) {
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
          <input type="text" onChange={(e) => onChangeAdd(e)} value= {word} placeholder="何やるか決めた？"/>        
          <button type= "button" style={buttonStyle} onClick={(e) => onClickAdd(e)} >やるで！</button>
        </form>
        <div>          
            <li>例）{post}</li>
          <ol className="ol-style">            
            {arr.map((val,i)=>(<li> {(val)} <button type= "button" style={buttonStyle} onClick={(e) => onClickComplete(e,i)}>やったで！</button><button type= "button" style={buttonStyle} onClick={(e) => onClickDelete(e,i)} >やめとくわ...</button></li>)) } 
          </ol>
        </div>     
      </div>
        
      <div>
        <br />          
          <h2>もう終わったで！</h2>          
          <ol className="ol-style">
            {completeTodo.map((val,i)=>(<li className="complete-style">{(val)} <button type= "button" style={buttonStyle} onClick={(e) => onClickBack(e,i)}>やり直さな！</button></li>))}  
        </ol>
      </div>             
    </div>
    <div>
      <br /><br />      
      <Link to={{ pathname:"/page1/detailA", state: { arr, completeTodo } }}>「今からやること」を確認する</Link>
      <br />
      <Link to={{ pathname:"/page1/detailB", state: { arr, completeTodo } }}>「もう終わったこと」を確認する</Link>
      <br /><br /><br /> 
      <BackButton color="orange" />    
    </div>
  </div>
  );
};