import { all, call, takeEvery } from 'redux-saga/effects';
import { listenForDatabaseUpdates, login, logout } from './sagas';
import { LOGIN, LOGOUT } from '../../actions/accounts';

/**
 * @desc Root accounts saga.
 * @return {void}
 */
export default function* rootSaga() {
  yield all([
    call(listenForDatabaseUpdates),
    yield takeEvery(LOGIN, login),
    yield takeEvery(LOGOUT, logout),
  ]);
}