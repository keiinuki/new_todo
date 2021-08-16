import { useState,  useCallback } from "react";

export const useTodoData = () => {
  const [arr, setArr] = useState([]);
  const [word, setWord] = useState("");
  const [completeTodo, setCompleteTodo] = useState([]);  
  
  //const onChangeAdd = useCallback((e) => {
    //e.preventDefault() 
    //setWord( e.target.value )   
  //},[]);

  const onClickAdd = useCallback(() => {
    //e.preventDefault()        
    const newArr = [...arr];
    newArr.push(word);
    setArr(newArr);
    setWord("");
    console.log(arr);
    alert("やることにしたで！");
  },[]);

  const onClickDelete = useCallback((i) => {
    //e.preventDefault();    
    const newArr = [...arr];
    newArr.splice(i,1);
    setArr(newArr);
    console.log(arr);
    alert("やっぱりやめるわ．．．");
  },[]);

  const onClickComplete = useCallback((i) => {
    //e.preventDefault();
    const newArr = [...arr];
    newArr.splice(i,1);
    const newCompleteTodo = [...completeTodo, arr[i]];
    setArr(newArr);
    setCompleteTodo(newCompleteTodo);
    console.log(arr,completeTodo);
    alert("やったった！");
  },[]);
  
  const onClickBack = useCallback((i) => {
    //e.preventDefault();
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(i,1);
    const newArr = [...arr, completeTodo[i]];      
    setCompleteTodo(newCompleteTodo);
    setArr(newArr);
    console.log(arr,completeTodo);
    alert("あかん！やり直しや．．．");
  },[]);

  return { arr, word, completeTodo, onClickAdd, onClickDelete, onClickComplete, onClickBack };
};