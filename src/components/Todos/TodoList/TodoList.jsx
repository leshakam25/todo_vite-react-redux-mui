import React from "react";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";
import { Box } from "@mui/system";
import Title from "../../Global/Title/Title";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <List>
        <Box
          sx={{
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
        <Title text="Невыполненные" />
        {todos &&
          todos
            .filter((e) => e.completed === false && e.archieved === false)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
        <Box
          sx={{
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
      </List>
      <List>
        <Title text="Выполненные" />
        {todos &&
          todos
            .filter((e) => e.completed === true && e.archieved === false)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
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
        {todos &&
          todos
            .filter((e) => e.archieved === true)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
      </List>
    </>
  );
}
