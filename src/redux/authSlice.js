import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../axios/axios';

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (params) => {
    const { data } = await axios.post('/auth/login', params);
    return data;
  },
);

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await axios.post('/auth/register', params);
    return data;
  },
);

const initialState = {
  data: null,
  status: 'loading...',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.status = 'Загружено';
      state.data = null;
    },
  },
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.status = 'Загрузка';
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = 'Загружено';
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state) => {
      state.status = 'Ошибка';
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = 'Загрузка';
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = 'Загружено';
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = 'Ошибка';
      state.data = null;
    },
    [fetchRegister.pending]: (state) => {
      state.status = 'Загрузка';
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = 'Загружено';
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = 'Ошибка';
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
