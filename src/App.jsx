import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import React from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, text: "do it", date: "21.12.2022" },
    { id: 1, text: "it it", date: "33.22.2022" },
    { id: 2, text: "do do", date: "44.11.2022" },
  ]);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (todoId) => () => {
    const currentIndex = checked.indexOf(todoId);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todoId);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  // ------

  const [date, setDate] = React.useState("");
  const [text, setText] = React.useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          date,
          text,
          completed: false,
        },
      ]);
      setText("");
      setDate("");
      console.log(todos);
    }
  };

  return (
    <>
      {" "}
      <Container maxWidth={false}>
        <TodoForm
          todos={todos}
          date={date}
          text={text}
          setText={setText}
          setDate={setDate}
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          removeTodo={removeTodo}
          checked={checked}
        />
      </Container>
    </>
  );
}

export default App;
