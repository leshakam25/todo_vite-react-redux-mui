import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function () {
    const response = await fetch("http://localhost:3100/todos");
    const data = await response.json();
    return data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 0, text: "do it", date: "21.12.2022", completed: true },
      { id: 1, text: "it it", date: "33.22.2022", completed: false },
      { id: 2, text: "do do", date: "44.11.2022", completed: false },
    ],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
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
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {},
    [fetchTodos.fulfilled]: (state, action) => {},
    [fetchTodos.rejected]: (state, action) => {},
  },
});
export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;
