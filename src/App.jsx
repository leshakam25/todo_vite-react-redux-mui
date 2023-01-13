import { Container } from "@mui/material";
import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <Container maxWidth={false}>
        <TodoForm />
        <TodoList />
      </Container>
    </>
  );
}

export default App;
