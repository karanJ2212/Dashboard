import { createSlice } from '@reduxjs/toolkit';

let nextId = 1; // Initialize the nextId counter

const initialState = {
  staffList: [],
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addStaff: (state, action) => {
      // eslint-disable-next-line no-plusplus
      const newStaff = { ...action.payload, id: nextId++ };
      state.staffList.push(newStaff);

      const userData = JSON.parse(localStorage.getItem('user')) || [];

      userData.push(newStaff);

      localStorage.setItem('user', JSON.stringify(userData));
    },
  },
});

export const { addStaff } = staffSlice.actions;

export default staffSlice.reducer;
