import { configureStore } from "@reduxjs/toolkit";
import authReducer, { restoreAuth } from './features/auth/slice/auth.slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const sagaMidlleware = createSagaMiddleware();
const store = configureStore({
    reducer:{
        auth : authReducer,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({thunk:false,serializableCheck :false}).concat(sagaMidlleware)
});

sagaMidlleware.run(rootSaga);
store.dispatch(restoreAuth());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;