import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  errorMessage: '',
  token: '',
  userInfo: {},
};

export const getMyPageFetch = createAsyncThunk(
  'users/getMyPageFetch',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get('/accounts');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    resetSuccessMessage: (state, action) => {
      const newState = { ...state };
      newState.message = '';
      newState.errorMessage = '';
      return newState;
    },
  },
  extraReducers: (builder) => {
    // getMyPageFetch Creator 작동 시 적용되는 내용들
    builder.addCase(getMyPageFetch.pending, (state, action) => {
      return state;
    });
    builder.addCase(getMyPageFetch.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.userInfo = action.payload.userInfo;
      return newState;
    });
    builder.addCase(getMyPageFetch.rejected, (state, action) => {
      const newState = { ...state };
      newState.errorMessage = action.payload.errorMessage;
      return newState;
    });
  },
});

export default accountsSlice;
