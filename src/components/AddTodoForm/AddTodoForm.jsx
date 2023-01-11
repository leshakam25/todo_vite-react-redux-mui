import { TextField, Button, ButtonGroup, Box } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddTodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => setTodos([...todos]));

  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          date,
          text,
          completed: false,
        },
      ]);
      setText("");
      setDate("");
      console.log(todos);
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
      <Button fullWidth variant="outlined" onClick={addTodo}>
        Добавить
      </Button>
    </Box>
  );
};

export default AddTodoForm;
