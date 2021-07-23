import { useState } from "react";
import { CompleteButton } from "./CompleteButton";
import { DeleteButton } from "./DeleteButton";

export const ToDoList = (props) => {
  const [arr, setArr] = useState(["例）花に水をやる"]);
  const [word, setWord] = useState("");


    const onClickAdd = (e) => {
    e.preventDefault()    
    //const newWord = [...word];
    //console.log(word);
    //newWord.push(setWord);
    const newArr = [...arr];
    newArr.push(word);
    setArr(newArr);
    //inputの値をリセットする
    setWord("");
    };

    const onClickDelete =(e,i) => {
    e.preventDefault()    
    const newArr = [...arr];
    newArr.splice(i, 1);
    setArr(newArr);
    console.log(newArr);
    }


  return (
    <div>
        <form>
        <input type="text" onChange={(e) => setWord( e.target.value)} value= {word} />        
        <button onClick={onClickAdd}>やるで！</button>
        {arr.map((val)=>(<li>{(val)} <button onClick={onClickDelete}>消すで！</button><button>やったで！</button></li>))} 
        
        </form>        
      </div>
    
  );
};