import {createSlice} from '@reduxjs/toolkit';
import INITIAL_STATE from './TaskInitial';

const taskSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTask(state, action) {
      state.list?.push(action.payload);
    },
    deleteTask(state, action) {
      state.list.splice(
        state.list.findIndex(itm => itm.id === action.payload),
        1,
      );
    },
    editTask(state, action) {
      let arr = [...state.list];
      let idx = arr.findIndex(itm => itm.id === action.payload.id);
      arr[idx] = action.payload;
      console.log(arr,action.payload)
      return {
        ...state,
        list: arr,
      };
    },
  },
});

export {taskSlice};
