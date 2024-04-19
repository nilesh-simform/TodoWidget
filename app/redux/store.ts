import {configureStore} from '@reduxjs/toolkit';
import {TaskStateType, taskSlice} from './Task';

export const store = configureStore({
  reducer: {
    todo: taskSlice.reducer,
  },
});

// Define the root state type
export type RootState = {
  todo: TaskStateType; // Assuming taskSlice.reducer manages the 'todo' state
};
