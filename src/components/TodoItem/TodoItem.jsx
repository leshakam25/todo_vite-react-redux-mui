import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../../store/todoSlice";

const TodoItem = ({ id, date, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch(removeTodo({ id }))}>
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
        role={undefined}
        onClick={() => toggleTodoCompleted(id)}
        dense
      >
        <Checkbox
          edge="start"
          checked={completed}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={date} />
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
