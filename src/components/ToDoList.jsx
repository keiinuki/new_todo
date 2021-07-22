import { useState } from "react";
import { CompleteButton } from "./CompleteButton";
import { DeleteButton } from "./DeleteButton";

export const ToDoList = (props) => {
  const [arr, setArr] = useState(["花に水をやる"]);
  const [word, setWord] = useState("");


  const onClickAdd = () => {    
    const newWord = [...word];
    newWord.push(setWord);
    const newArr = [...arr];
    newArr.push(newWord);
    setArr(newArr);
    };


  return (
    <div>
        <form>
        <input type="text" onChange={(e) => setWord( e.target.value)} value= {word} />        
        <button onClick={onClickAdd}>やるで！</button>
        {arr.map((val)=>(<li>{(val)}< CompleteButton />
        < DeleteButton /></li>))} 
        </form>        
      </div>
    
  );
};