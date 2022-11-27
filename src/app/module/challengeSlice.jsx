import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:8080';

const initialState = {
  message: '',
  errorMessage: '',
  data: [],
};

// 개인 리스트 조회 (최신순 - 챌린지 생성일 기준)

// 단체 리스트 조회 (최신순 - 챌린지 생성일 기준)
export const getChallengeList = createAsyncThunk(
  'challenge/getChallengeList',
  async (name, thunkAPI) => {
    try {
      const response = await axios(url);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    removeChallenge: (state) => {
      state.challenge;
    },
  },
  extraReducers: {},
});
