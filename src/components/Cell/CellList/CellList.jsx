import React from "react";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import CellItem from "../CellItem/CellItem";
import Title from "../../Global/Title/Title";
import { Paper } from "@mui/material";

export default function CellList() {
  const cell = useSelector((state) => state.cell.cell);
  const paperElevation = "2";
  const paperStyle = { my: 2, p: 1 };
  return (
    <>
      <Paper
        sx={paperStyle}
        variant="elevation"
        elevation={paperElevation}
        children={
          <>
            <Title text="Невыполнено" />
            {cell &&
              cell
                .filter((e) => e.completed === false && e.archieved === false)
                .map((todo) => {
                  return <CellItem key={todo.id} {...todo} />;
                })}
          </>
        }
      />{" "}
      <Paper
        sx={paperStyle}
        variant="elevation"
        elevation={paperElevation}
        children={
          <>
            <Title text="Выполнено" />
            {cell &&
              cell
                .filter((e) => e.completed === true && e.archieved === false)
                .map((todo) => {
                  return <CellItem key={todo.id} {...todo} />;
                })}
          </>
        }
      />{" "}
      <Paper
        sx={paperStyle}
        variant="elevation"
        elevation={paperElevation}
        children={
          <>
            {" "}
            <Title text="Архив" />
            {cell &&
              cell
                .filter((e) => e.archieved === true)
                .map((todo) => {
                  return <CellItem key={todo.id} {...todo} />;
                })}
          </>
        }
      />
    </>
  );
}
