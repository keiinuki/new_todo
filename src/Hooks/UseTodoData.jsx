import { useState,  useCallback } from "react";

export const useTodoData = () => {
  const [arr, setArr] = useState([]);
  const [word, setWord] = useState("");
  const [completeTodo, setCompleteTodo] = useState([]);  
  
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

  return { arr, word, completeTodo, onChangeAdd, onClickAdd, onClickDelete, onClickComplete, onClickBack };
};