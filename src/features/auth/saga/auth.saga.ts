import { call, put, takeLatest } from "redux-saga/effects";
import { loginFailure, loginRequest, loginSuccess } from "../slice/auth.slice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LoginPayload, LoginResponse } from "../types/auth.types";
import { loginService } from "../api/auth.api";
import { storage } from "../../../utils/storage";
import { AUTH_USER_KEY } from "../../../constants/auth.constants";

function* handleLogin(action:PayloadAction<LoginPayload>){
  try {
    const response : LoginResponse = yield call(loginService,action.payload);
    
    const {accessToken , refreshToken,user} = response;
    storage.setAccessToken(accessToken);
    storage.setRefreshToken(refreshToken);
    localStorage.setItem(AUTH_USER_KEY,JSON.stringify(user));
    yield put(loginSuccess(response));

  } catch (error : any) {
     const message = error.response?.data?.message || 'Login thất bại';
     yield put(loginFailure(message));
  }
}

export default function* authSaga(){
    yield takeLatest(loginRequest.type,handleLogin);
}