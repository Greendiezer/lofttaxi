import {takeEvery, call, put} from '@redux-saga/core/effects'
import { GET_ROUTE, getRouteSuccess, getRouteFailure } from '../actions/actions'
import {getRouteFromServer} from '../api/api'

export function* getRouteWatcher () {
    yield takeEvery(GET_ROUTE, getRouteSaga)
}

export function* getRouteSaga(action) {
    const addresses = action.payload
    const data = yield call(getRouteFromServer, addresses)
    if(data) {
        yield put(getRouteSuccess(data))
    } else {
        yield put(getRouteFailure("error"))
    }
}
