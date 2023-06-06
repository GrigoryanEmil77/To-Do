import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Todos.css";

function Todos({ todos, setTodos,text,setText}) {
 
  const [textId, setTextId] = useState();
  const [change, setChange] = useState(false);

  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div className="all" key={todo.id}>
            <h1>{todo.name}</h1>
            <div className="icons" >
              <input
                className="input"
                type="checkbox"
                checked={todo.checked}
                onChange={() => {
                  const check = todos.find((val) => val.id === todo.id);
                  check.checked = !check.checked;
                  setTodos([...todos]);
                }}
              />

              <DeleteForeverIcon
                sx={{ width: 30, height: 30, color: "black" }}
                onClick={() => {
                  setTodos(todos.filter((val) => val.id !== todo.id));
                }}
              ></DeleteForeverIcon>

              <EditIcon
                sx={{ width: 30, height: 30, color: "black" }}
                onClick={() => {
                  setText(todo.name);
                  setTextId(i);
                  setChange(!change);
                }}
              ></EditIcon>
                  </div>
        
              {change && textId === i ? (
                <Button
                  variant="outlined"
                  sx={{ width: 200, height: 30,background:"black",marginTop:4 }}
                  onClick={() => {
                    if (text.trim()) {
                      const newname = todos.find(
                        (value) => value.id === todo.id
                      );
                      newname.name = text;
                      setText("");
                    }
                    setChange(!change);
                  }}
                >
                  CHANGE THE NAME
                </Button>
              ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
