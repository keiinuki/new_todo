import { useState,  useCallback } from "react";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [completeTodoList, setCompleteTodoList] = useState([]); 

    const addTodo = useCallback((word) => {         
    const newTodoList = [...todoList];
    newTodoList.push(word);
    setTodoList(newTodoList);    
    alert("やることにしたで！");
  },[todoList]);
    
  const deleteTodo = useCallback((i) => {
    const newTodoList = [...todoList];
    newTodoList.splice(i,1);
    setTodoList(newTodoList);
    alert("やっぱりやめるわ．．．");
  },[todoList]);

  const completeTodo = useCallback((i) => {
    const newTodoList = [...todoList];
    newTodoList.splice(i,1);
    const newCompleteTodoList = [...completeTodoList, todoList[i]];
    setTodoList(newTodoList);
    setCompleteTodoList(newCompleteTodoList);
    alert("やったった！");
  },[todoList, completeTodoList]);

  const backTodo = useCallback((i) => {
    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(i,1);
    const newTodoList = [...todoList, completeTodoList[i]];      
    setCompleteTodoList(newCompleteTodoList);
    setTodoList(newTodoList);
    alert("あかん！やり直しや．．．");
  },[todoList, completeTodoList]);

  return { todoList, addTodo, deleteTodo, completeTodo, backTodo };
};