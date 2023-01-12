import { TextField, Button, Box } from "@mui/material";
import React from "react";

const TodoForm = ({ date, text, handleSubmit }) => {
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
      <Button fullWidth variant="outlined" onClick={handleSubmit}>
        Добавить
      </Button>
    </Box>
  );
};

export default TodoForm;
