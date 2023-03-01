import { createSlice } from '@reduxjs/toolkit';

const initState = {
  data: [],
};

const Slice = createSlice({
  name: 'todos',
  initialState: initState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.data = [...state.data, { id: state.data.length + 1, ...payload }];
    },
    toogleTodoStatus: (state, { payload }) => {
      state.data = state.data.map(todo =>
        todo.id === payload ? { ...todo, status: !todo.status } : todo
      );
    },
  },
});

export const rootReducer = Slice.reducer;
export const { addTodo, deleteTodo, toogleTodoStatus } = Slice.actions;
