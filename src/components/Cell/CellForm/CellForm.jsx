import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCell } from "../../../store/cellSlice";
import Title from "../../Global/Title/Title";

const CellForm = () => {
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addCell({ date, text }));
    setText("");
    setDate("");
  };
  return (
    <>
      <Title text="Добавление" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
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
  );
};

export default CellForm;
