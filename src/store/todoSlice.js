import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 0, text: "do it", date: "21.12.2022" },
      { id: 1, text: "it it", date: "33.22.2022" },
      { id: 2, text: "do do", date: "44.11.2022" },
    ],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        date: action.payload,
        text: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    },
    handleToggle(state, action) {
      const [checked, setChecked] = useState([0]);
      const currentIndex = checked.indexOf(todoId);
      const newChecked = [...checked];
      if (currentIndex === -1) {
        newChecked.push(todoId);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    },
  },
});
export const { addTodo, removeTodo, handleToggle } = todoSlice.actions;
export default todoSlice.reducer;
