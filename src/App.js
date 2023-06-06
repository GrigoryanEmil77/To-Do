import { useState } from "react";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import "./App.css"
import Header from "./components/Header";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "JACK",
      checked: false,
    },
    {
      id: 2,
      name: "JAMES",
      checked: true,
    },
  ]);
  

  return (
   <div className="cont">
      <Header todos ={todos} setTodos={setTodos} text={text} setText={setText}/>
      <Todos todos ={todos} setTodos={setTodos}text={text} setText={setText} />
      <Footer todos ={todos} setTodos={setTodos}/>
     
    </div>
  );
}

export default App;
