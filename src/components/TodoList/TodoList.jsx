import React from "react";
import List from "@mui/material/List";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ handleToggle, removeTodo }) {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <List
      sx={{ mt: 2, width: "100%", maxWidth: 420, bgcolor: "background.paper" }}
    >
      {todos &&
        todos.map((el) => {
          return (
            <TodoItem
              handleToggle={handleToggle}
              removeTodo={removeTodo}
              key={el.id}
              {...el}
            />
          );
        })}
    </List>
  );
}
