import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  toggleTodoArchieved,
  toggleTodoCompleted,
} from "../../../store/todoSlice";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";

const TodoItem = ({ id, date, text, completed, archieved }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      sx={{
        // bgcolor:  "#34A0A4",
        my: 2,
        borderRadius: "8px",
      }}
      secondaryAction={
        <ButtonGroup sx={{ m: 0 }} orientation="horizontal">
          <Button
            size="small"
            color={!completed ? "success" : "primary"}
            variant="text"
            onClick={() => dispatch(toggleTodoCompleted({ id }))}
          >
            {!completed ? <RadioButtonUncheckedIcon /> : <TaskAltIcon />}
          </Button>

          <Button
            size="small"
            color={!archieved ? "success" : "primary"}
            variant="text"
            onClick={() => dispatch(toggleTodoArchieved({ id }))}
          >
            {!archieved ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
          </Button>

          <Button
            color="error"
            size="small"
            variant="text"
            onClick={() => dispatch(removeTodo({ id }))}
          >
            <DeleteOutlineIcon />
          </Button>
        </ButtonGroup>
      }
      disablePadding
    >
      {/* <ListItemButton
        onClick={() => dispatch(toggleTodoCompleted({ id }))}
        dense
      > */}
      <ListItemText
        primary={
          <Typography
            variant="body2"
            sx={{
              opacity: 0.5,
              textAlign: "left",
            }}
          >
            {date}
          </Typography>
        }
        secondary={
          <Typography
            variant="body1"
            component="div"
            sx={{
              maxWidth: 392,
              p: 1,
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
      ></Box>
      {/* </ListItemButton> */}
    </ListItem>
  );
};

export default TodoItem;
