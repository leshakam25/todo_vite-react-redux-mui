import { TextField, Button, Box } from "@mui/material";
import React, { useState } from "react";

const TodoForm = ({ date, text, addTodo, setText, setDate }) => {
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
      <Button fullWidth variant="outlined" onClick={addTodo}>
        Добавить
      </Button>
    </Box>
  );
};

export default TodoForm;
