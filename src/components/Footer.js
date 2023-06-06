import { Button } from "@mui/material";
import "./Footer.css"

function Footer({todos,setTodos}) {
  return (
    <div className="delChecked">
      <span>
        {todos.filter((val) => val.checked).length}/{todos.length}Count
      </span>
      <Button
        variant="outlined"
        sx={{ background: "black" }}
        onClick={() => {
          setTodos(todos.filter((val) => !val.checked));
        }}
      >
        DELETE CHECKED
      </Button>
    </div>
  );
}
export default Footer;
