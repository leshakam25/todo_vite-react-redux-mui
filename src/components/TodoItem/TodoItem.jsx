import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../../store/todoSlice";
import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";

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
        onClick={() => dispatch(toggleTodoCompleted({ id }))}
        dense
      >
        <Checkbox edge="start" checked={completed} />
        <ListItemText
          primary={
            <Typography
              sx={{
                fontSize: 16,
                opacity: 0.5,
                textAlign: "left",
              }}
            >
              {date}
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                fontSize: 14,
                opacity: 0.9,
                textAlign: "justify",
              }}
            >
              {text}
            </Typography>
          }
        />
        <Box
          sx={{
            display: "block",
            minWidth: "80px",
            mx: 1,
          }}
        >
          {completed && (
            <Chip
              sx={{
                width: "100%",
                bgcolor: "#00a550",
                color: "white",
                fontSize: 12,
              }}
              label="Готово"
            />
          )}
          {!completed && (
            <Chip
              sx={{
                width: "100%",
                bgcolor: "#ba66ff",
                color: "white",
                fontSize: 10,
              }}
              label="В процессе"
            />
          )}
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
