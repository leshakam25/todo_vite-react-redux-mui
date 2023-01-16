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
      secondaryAction={
        <ButtonGroup sx={{ m: 0 }}>
          <Button
            size="small"
            color={!completed ? "success" : "primary"}
            variant="contained"
            onClick={() => dispatch(toggleTodoCompleted({ id }))}
          >
            {!completed ? (
              <RadioButtonUncheckedIcon
                sx={{
                  opacity: 0.8,
                }}
              />
            ) : (
              <TaskAltIcon
                sx={{
                  opacity: 0.8,
                }}
              />
            )}
          </Button>

          <Button
            size="small"
            color={!archieved ? "success" : "primary"}
            variant="contained"
            onClick={() => dispatch(toggleTodoArchieved({ id }))}
          >
            {!archieved ? (
              <ArrowDownwardIcon
                sx={{
                  opacity: 0.8,
                }}
              />
            ) : (
              <ArrowUpwardIcon
                sx={{
                  opacity: 0.8,
                }}
              />
            )}
          </Button>

          <Button
            color="error"
            size="small"
            variant="outlined"
            onClick={() => dispatch(removeTodo({ id }))}
          >
            <DeleteOutlineIcon
              sx={{
                opacity: 0.8,
              }}
            />
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
            component="div"
            sx={{
              maxWidth: 440,
              p: 1,
              bgcolor: "papayawhip",
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
