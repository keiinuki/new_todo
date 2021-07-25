import './App.css';
import { ToDoList } from './components/ToDoList';


const App =() =>  {
  const containerstyle = {
    border: "solid 1px #ddd",
    textAlign: "center",
    padding: "auto",
    backgroundColor: "#ddd",
    width: "600px",
    height: "auto",
    margin: "auto"
  }
  return (
    <div style={containerstyle}>
      <h1>やらなあかんこと</h1>
      <div>
        < ToDoList />        
      </div>
    </div>
  );
}

export default App;
