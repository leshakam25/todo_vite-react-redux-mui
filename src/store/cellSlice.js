import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCell = createAsyncThunk(
  "cell/fetchCell",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("http://localhost:3100/cell");
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cellSlice = createSlice({
  name: "cell",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addCell(state, action) {
      state.cell.push({
        id: new Date().toISOString(),
        date: action.payload.date,
        text: action.payload.text,
        completed: false,
        archieved: false,
      });
    },
    removeCell(state, action) {
      state.cell = state.cell.filter((cell) => cell.id !== action.payload.id);
    },
    toggleCellCompleted(state, action) {
      const toggledCell = state.cell.find(
        (cell) => cell.id === action.payload.id
      );
      toggledCell.completed = !toggledCell.completed;
    },
    toggleCellArchieved(state, action) {
      const toggledCell = state.cell.find(
        (cell) => cell.id === action.payload.id
      );
      toggledCell.archieved = !toggledCell.archieved;
    },
  },
  extraReducers: {
    [fetchCell.pending]: (state) => {
      state.status = "loading";
      state.cell = null;
    },
    [fetchCell.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cell = action.payload;
    },

    [fetchCell.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export const { addCell, removeCell, toggleCellCompleted, toggleCellArchieved } =
  cellSlice.actions;
export default cellSlice.reducer;
