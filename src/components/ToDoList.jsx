import { useState } from "react";
import { CompleteButton } from "./CompleteButton";
import { DeleteButton } from "./DeleteButton";

export const ToDoList = () => {
  const input = document.getElementById("word");
  const [arr, setArr] = useState(["例．花に水をやる",]);

  const onClickAdd = () => {
    const newArr = [...arr];
    newArr.push(input.value);
    setArr(newArr);
  }
  

  return (
    <div>
        <form>
        <input type="text" id="word"/>        
        <button onClick={onClickAdd}>やるで！</button>
        {arr.map((val) => (<p>{val}< CompleteButton />
        < DeleteButton /></p>))}
        
        </form>        
      </div>
    
  );
};