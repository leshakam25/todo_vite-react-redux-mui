import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 0, text: "do it", date: "21.12.2022", completed: true },
      { id: 1, text: "it it", date: "33.22.2022", completed: false },
      { id: 2, text: "do do", date: "44.11.2022", completed: false },
    ],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state);
      console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        date: action.payload.date,
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});
export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
