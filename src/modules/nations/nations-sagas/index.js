// @flow

import { all, takeEvery, call } from 'redux-saga/effects';

import { REQUEST_JOIN_NATION, REQUEST_LEAVE_NATION } from '../nations-actions';
import { joinNation, leaveNation, startDatabaseListening, startNationIndexingWorker } from './sagas';
import { SERVICES_CREATED } from 'pangea-common/serviceContainer-actions';

/**
 * @desc Root modify nation saga.
 * @return {void}
 */
export default function* rootSaga(): Generator<*, *, *> {
  yield all([
    yield takeEvery(REQUEST_JOIN_NATION, joinNation),
    yield takeEvery(REQUEST_LEAVE_NATION, leaveNation),
    yield takeEvery(SERVICES_CREATED, startNationIndexingWorker),
    yield call(startDatabaseListening),
  ]);
}
