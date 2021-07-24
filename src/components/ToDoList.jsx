import { useState } from "react";


export const ToDoList = (props) =>{
  const [arr, setArr] = useState(["例）花に水をやる"]);
  const [word, setWord] = useState("");
  const [completeTodo, setCompleteTodo] = useState([]);

    const onClickAdd = (e) => {
    e.preventDefault()        
    const newArr = [...arr];
    newArr.push(word);
    setArr(newArr);
    setWord("");
    };

    const onClickDelete =(e,i) => {
      console.log(e)
      e.preventDefault();    
      const newArr = [...arr];
      newArr.splice(i,1);
      setArr(newArr);
      console.log(i);
    };

    const onClickComplete =(e,i) => {
      e.preventDefault();
      const newArr = [...arr];
      newArr.splice(i,1);
      const newCompleteTodo = [...completeTodo, arr[i]];
      setArr(newArr);
      setCompleteTodo(newCompleteTodo);
    };
  
    const onClickBack =(e,i) => {
      e.preventDefault();
      const newCompleteTodo = [...completeTodo];
      newCompleteTodo.splice(i,1);
      const newArr = [...arr, completeTodo[i]];      
      setCompleteTodo(newCompleteTodo);
      setArr(newArr);
    };
    
    const competeStyle= {
      textDecoration:"line-through red" 
    }


  return (
    <div>
      <div className="inCompleteArea">
        <p className="area1">
          <h2>今からやるで！</h2>
          </p>
        <form>
        <input type="text" onChange={(e) => {
          setWord( e.target.value)
          console.log(e)
          }} value= {word} />        
        <button onClick={onClickAdd}>やるで！</button>
        {arr.map((val,i)=>(<li>{(val)} <button  onClick={(e) => onClickDelete(e,i)} >消すで！</button><button onClick={(e) => onClickComplete(e,i)}>やったで！</button></li>))} 
        
        </form>     
        </div>
        <div className="complereArea">
          <p classname="area2">
            <h2>もう終わったで！</h2>
            </p>
        {completeTodo.map((val,i)=>(<li style={competeStyle}>{(val)}<button onClick={(e) => onClickBack(e,i)}>やり直さな！</button></li>))}  
        </div>   
      </div>
    
  );
};
