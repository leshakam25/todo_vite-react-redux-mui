import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { TextField, Button, Box, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/cellSlice";
import Title from "../../Global/Title/Title";

const CustomForm = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ date, text }));
    setText("");
    setDate("");
  };
  return (
    <Paper
      elevation={4}
      children={
        <>
          <Title text="Добавление" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              my: 1,
              p: 2,
              width: "100%",
            }}
          >
            <TextField
              size="small"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              label="Дата"
            />
            <TextField
              color="warning"
              size="small"
              fullWidth
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Что делаем?"
            />
            <Button
              size="small"
              disabled={!text}
              variant="outlined"
              color="warning"
              onClick={addTask}
            >
              <AddTaskIcon />
            </Button>
          </Box>
        </>
      }
    />
  );
};

export default CustomForm;
