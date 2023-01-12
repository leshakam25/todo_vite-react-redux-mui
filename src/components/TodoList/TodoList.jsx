import React from "react";
import List from "@mui/material/List";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ todos, checked, removeTodo, handleToggle }) {
  return (
    <List
      sx={{ mt: 2, width: "100%", maxWidth: 420, bgcolor: "background.paper" }}
    >
      {todos &&
        todos.map((el) => {
          return (
            <TodoItem
              key={el.id}
              handleToggle={handleToggle}
              removeTodo={removeTodo}
              checked={checked}
              {...el}
            />
          );
        })}
    </List>
  );
}
