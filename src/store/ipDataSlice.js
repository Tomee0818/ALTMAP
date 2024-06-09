import { createSlice } from '@reduxjs/toolkit';

export const ipDataSlice = createSlice({
  name: 'ipData',
  initialState: [],
  reducers: {
    setIpData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIpData } = ipDataSlice.actions;

export const selectIpData = (state) => state.ipData;

export default ipDataSlice.reducer;