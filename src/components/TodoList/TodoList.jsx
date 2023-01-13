import React from "react";
import List from "@mui/material/List";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <List>
      {todos &&
        todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
    </List>
  );
}
