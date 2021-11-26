import { takeLatest } from 'redux-saga/effects';
import {
  resetPassStartReqActionCreator,
  resetPassEndReqActionCreator,
} from '../../actions';
import { resetPassStartWorkSaga, resetPassEndWorkSaga } from './workers';

export function* resetPassWatchSaga() {
  yield takeLatest(resetPassStartReqActionCreator, resetPassStartWorkSaga);
  yield takeLatest(resetPassEndReqActionCreator, resetPassEndWorkSaga);
}
