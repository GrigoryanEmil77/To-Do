import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Header.css"

function Header({todos,setTodos,text,setText}){
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && text.trim()) {
                setTodos([
                  ...todos,
                  { id: Math.random(), name: text, checked: false },
                ]);
                setText("");
        }
      };
    return(
        <div>
        <div className="box">
          <TextField
            sx={{width:"25%"}}
            value={text}
            placeholder="TEXT..."
            onKeyDown={handleKeyPress}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            sx={{ width:"170px",height:"58px", background: "black",  }}
            onClick={() => {
              if (text.trim()) {
                setTodos([
                  ...todos,
                  { id: Math.random(), name: text, checked: false },
                ]);
                setText("");
              }
            }}
          >
            ADD
          </Button>
        </div>
        </div>
  
    )
}
export default Header