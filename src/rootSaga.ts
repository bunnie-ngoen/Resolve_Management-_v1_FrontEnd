import { all } from 'redux-saga/effects';
import authSaga from './features/auth/saga/auth.saga';
export default function* rootSaga() {
  yield all([
    authSaga(),
    // add other sagas here
  ]);
}
