import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todoSlice";

const TodoForm = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ date, text }));
    setText("");
    setDate("");
  };
  return (
    <>
      <Typography>Добавление</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 0.2,
          width: "100%",
          my: 1,
        }}
      >
        <TextField
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          size="small"
          placeholder="Дата"
          sx={{
            width: 100,
          }}
        />
        <TextField
          fullWidth
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          size="small"
          placeholder="Что делаем?"
        />
        <Button
          disabled={!text}
          variant="outlined"
          color="secondary"
          onClick={addTask}
        >
          <AddTaskIcon />
        </Button>
      </Box>
    </>
  );
};

export default TodoForm;
