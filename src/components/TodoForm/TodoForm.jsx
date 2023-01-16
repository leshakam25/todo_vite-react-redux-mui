import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const TodoForm = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const addTask = () => {
    if (date && text) {
      dispatch(addTodo({ date, text }));
      setText("");
      setDate("");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <TextField
        fullWidth
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        size="small"
        placeholder="Введите дату"
      />
      <TextField
        multiline
        rows={3}
        fullWidth
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        size="small"
        placeholder="Введите дело"
      />
      <Button disabled={!text} fullWidth variant="outlined" onClick={addTask}>
        Добавить
      </Button>
    </Box>
  );
};

export default TodoForm;
