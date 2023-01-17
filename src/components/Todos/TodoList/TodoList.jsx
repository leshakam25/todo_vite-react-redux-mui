import React from "react";
import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import TodoItem from "../TodoItem/TodoItem";
import { Box } from "@mui/system";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <>
      <List>
        <Box
          sx={{
            ml: -2,
            width: "110%",
            height: "3px",
            bgcolor: "#161925",
            mt: 1,
          }}
        ></Box>{" "}
        <Typography
          fontFamily="Mulish"
          fontWeight="700"
          variant="h5"
          sx={{
            mt: 2,
          }}
        >
          Невыполненные
        </Typography>
        {todos &&
          todos
            .filter((e) => e.completed === false && e.archieved === false)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
        <Box
          sx={{
            ml: -2,
            width: "110%",
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
      </List>

      <List>
        <Typography
          fontFamily="Mulish"
          fontWeight="700"
          variant="h5"
          sx={{
            mt: 2,
          }}
        >
          Выполненные
        </Typography>
        {todos &&
          todos
            .filter((e) => e.completed === true && e.archieved === false)
            .map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })}
        <Box
          sx={{
            ml: -2,
            width: "110%",
            height: "3px",
            bgcolor: "#161925",
          }}
        ></Box>
      </List>
      <List>
        <Typography
          fontFamily="Mulish"
          fontWeight="700"
          variant="h5"
          sx={{
            mt: 2,
          }}
        >
          Архив
        </Typography>
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
