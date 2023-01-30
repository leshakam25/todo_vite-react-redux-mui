import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { TextField, Button, Box, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCell } from "../../../store/cellSlice";
import Title from "../../Global/Title/Title";

const CellForm = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const paperElevation = "2";
  const paperStyle = { m: 0.5, p: 0.5 };
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addCell({ date, text }));
    setText("");
    setDate("");
  };
  return (
    <Paper
      elevation={paperElevation}
      sx={paperStyle}
      children={
        <>
          <Title text="Добавление" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
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
              size="small"
              fullWidth
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              label="Что делаем?"
            />
            <Button size="small" disabled={!text} onClick={addTask}>
              <AddTaskIcon />
            </Button>
          </Box>
        </>
      }
    />
  );
};

export default CellForm;
