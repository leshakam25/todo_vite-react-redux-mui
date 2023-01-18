import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCell } from "../../../store/cellSlice";
// import Picker from "../../Global/DateTimePicker/Picker";
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
          gap: 1,
          my: 1,
          bgcolor: "rgba(142, 168, 195,0.4)",
          p: 2,
          width: "100%",
          ml: -2,
        }}
      >
        {/* <Picker
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        /> */}
        <TextField
          color="warning"
          variant="standard"
          size="small"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          label="Дата"
        />
        <TextField
          color="warning"
          variant="standard"
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
  );
};

export default CellForm;
