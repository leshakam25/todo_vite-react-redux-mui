import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";

export default function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 0, text: "do it", date: "21.12.2022" },
    { id: 1, text: "it it", date: "33.22.2022" },
    { id: 2, text: "do do", date: "44.11.2022" },
  ]);

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{ mt: 2, width: "100%", maxWidth: 420, bgcolor: "background.paper" }}
    >
      Список дел:
      {todos.map((el) => {
        return (
          <ListItem
            key={el.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <BackspaceIcon
                  sx={{
                    opacity: 0.8,
                  }}
                />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              role={undefined}
              onClick={handleToggle(el)}
              dense
            >
              <Checkbox
                edge="start"
                checked={checked.indexOf(el) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": el.id }}
              />
              <ListItemText id={el.id} primary={el.date} />
              <ListItemText id={el.id} primary={el.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
