import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [date, setDate] = React.useState("");
  const [text, setText] = React.useState("");

  const dispatch = useDispatch();
  const addTask = () => dispatch(addTodo(text, date));
  const toggleTask = () => dispatch(handleToggle(todoId));
  const removeTask = () => dispatch(removeTodo(todo));

  return (
    <>
      <Container maxWidth={false}>
        <TodoForm text={text} date={date} handleSubmit={addTask} />
        <TodoList handleToggle={toggleTask} removeTodo={removeTask} />
      </Container>
    </>
  );
}

export default App;
