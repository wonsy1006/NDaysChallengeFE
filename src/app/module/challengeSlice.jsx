import { createSlice } from '../../../node_modules/@reduxjs/toolkit/dist/createSlice';

const initialState = {
  category: '',
  title: '',
  period: '',
};

const challengeListSlice = createSlice({
  name: 'challengeList',
  initialState,
  reducers: {
    getChallenge: (state, action) => initialState,
  },
});
