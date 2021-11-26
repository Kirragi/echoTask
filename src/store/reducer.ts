import {
  // configureStore,
  createSlice,
  PayloadAction,
  // getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { userAuth } from '../types';

const userInitialState: userAuth = {
  id: -1,
  phone: '',
  password: '',
  firstName: '',
  lastName: '',
  token: '',
  resetPassCode: '',
  resetPass: false,
  authorized: false,
  signInError: '',
  signUpError: '',
  resetPassError: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    onSignInReq: (
      state,
      { payload }: PayloadAction<{ phone: string; password: string }>,
    ) => {
      state.phone = payload.phone;
      state.password = payload.password;
    },
    onSignInResp: (
      state,
      { payload }: PayloadAction<{ authorized: boolean; token: string }>,
    ) => {
      state.authorized = payload.authorized;
      state.token = payload.token;
    },
    onSignUpReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        phone: string;
        password: string;
        firstName: string;
        lastName: string;
      }>,
    ) => {
      state.phone = payload.phone;
      state.password = payload.password;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    onSignUpResp: (
      state,
      { payload }: PayloadAction<{ authorized: boolean; token: string }>,
    ) => {
      state.authorized = payload.authorized;
      state.token = payload.token;
    },
    getUser: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: number;
        phone: string;
        firstName: string;
        lastName: string;
      }>,
    ) => {
      state.id = payload.id;
      state.phone = payload.phone;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    resetPassStartReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        phone: string;
      }>,
    ) => {
      state.phone = payload.phone;
    },
    resetPassStartResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        resetPass: boolean;
      }>,
    ) => {
      state.resetPass = payload.resetPass;
    },
    resetPassEndReq: (
      state,
      {
        payload,
      }: PayloadAction<{
        phone: string;
        resetPassCode: string;
        password: string;
      }>,
    ) => {
      state.phone = payload.phone;
      state.resetPassCode = payload.resetPassCode;
      state.password = payload.password;
    },
    resetPassEndResp: (
      state,
      {
        payload,
      }: PayloadAction<{
        authorized: boolean;
        token: string;
      }>,
    ) => {
      state.token = payload.token;
      state.authorized = payload.authorized;
      state.resetPass = false;
      state.resetPassCode = '';
    },
    signOut: (state) => {
      state.id = -1;
      state.phone = '';
      state.password = '';
      state.firstName = '';
      state.lastName = '';
      state.token = '';
      state.resetPassCode = '';
      state.resetPass = false;
      state.authorized = false;
      state.signInError = '';
      state.signUpError = '';
      state.resetPassError = '';
    },
    setSignInError: (
      state,
      {
        payload,
      }: PayloadAction<{
        error: string;
      }>,
    ) => {
      state.signInError = payload.error;
    },
    setSignUpError: (
      state,
      {
        payload,
      }: PayloadAction<{
        error: string;
      }>,
    ) => {
      state.signUpError = payload.error;
    },
    setresetPassError: (
      state,
      {
        payload,
      }: PayloadAction<{
        error: string;
      }>,
    ) => {
      state.resetPassError = payload.error;
    },
  },
});

export const reducer = combineReducers({
  user: userSlice.reducer,
});
