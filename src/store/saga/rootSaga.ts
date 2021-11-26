import { all } from 'redux-saga/effects';
import { authWatchSaga } from './Auth/watchers';
import { resetPassWatchSaga } from './ResetPass/watchers';
export default function* rootSaga() {
  console.log('rootsagaa');
  yield all([
    authWatchSaga(),
    resetPassWatchSaga(),
    // prayerWatchSaga(),
    // columnsWatchSaga(),
    // commentsWatchSaga(),
  ]);
}
