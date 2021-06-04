import {takeEvery, call, put} from '@redux-saga/core/effects'
import { GET_ADDRESS_LIST, getAddressListSuccess, getAddressListFailure } from '../actions/actions'
import {getAddressListFromServer} from '../api/api'

export function* getAddressListWatcher () {
    yield takeEvery(GET_ADDRESS_LIST, getAddressListSaga)
}

export function* getAddressListSaga(action) {
    const data = yield call(getAddressListFromServer)
    if(data.addresses) {
        yield put(getAddressListSuccess(data))
    } else {
        yield put(getAddressListFailure("error"))
    }
}
