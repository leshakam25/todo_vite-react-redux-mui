import React from "react";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import CellItem from "../CellItem/CellItem";
import { Box } from "@mui/system";
import Title from "../../Global/Title/Title";

export default function CellList() {
  const cell = useSelector((state) => state.cell.cell);

  return (
    <>
      <List>
        <Box
          sx={{
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
        <Title text="Невыполнено" />
        {cell &&
          cell
            .filter((e) => e.completed === false && e.archieved === false)
            .map((todo) => {
              return <CellItem key={todo.id} {...todo} />;
            })}
        <Box
          sx={{
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
      </List>
      <List>
        <Title text="Выполнено" />
        {cell &&
          cell
            .filter((e) => e.completed === true && e.archieved === false)
            .map((todo) => {
              return <CellItem key={todo.id} {...todo} />;
            })}
        <Box
          sx={{
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
      </List>
      <List>
        <Title text="Архив" />
        {cell &&
          cell
            .filter((e) => e.archieved === true)
            .map((todo) => {
              return <CellItem key={todo.id} {...todo} />;
            })}
      </List>
    </>
  );
}
