import { createSlice } from '@reduxjs/toolkit';

const initState = {
  data: [],
};

const Slice = createSlice({
  name: 'todos',
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.data = state.data.filter(todo => todo.id !== payload);
    },
    toogleTodoStatus: (state, { payload }) => {
      state.data = state.data.map(todo => {
        if (todo.id === payload) {
          return { ...todo, status: !todo.status };
        } else {
          return state.data;
        }
      });
    },
  },
});

export const rootReducer = Slice.reducer;
export const { addTodo, deleteTodo, toogleTodoStatus } = Slice.actions;
