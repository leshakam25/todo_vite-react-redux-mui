import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";

const TodoItem = ({ id, text, date, checked, handleToggle, removeTodo }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => removeTodo(id)}
        >
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
        onClick={handleToggle(id)}
        dense
      >
        <Checkbox
          edge="start"
          checked={checked.indexOf(id) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": id }}
        />
        <ListItemText primary={date} />
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
