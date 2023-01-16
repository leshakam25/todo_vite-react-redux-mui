import React from "react";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <List
        sx={{
          bgcolor: "background.main",
        }}
      >
        <Typography>Невыполненные</Typography>
        {todos &&
          todos
            .filter((e) => e.completed === false && e.archieved === false)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
      </List>
      <List>
        <Typography>Выполненные</Typography>
        {todos &&
          todos
            .filter((e) => e.completed === true && e.archieved === false)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
      </List>
      <List
        sx={{
          background: "paper",
        }}
      >
        <Typography>Архив</Typography>
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
