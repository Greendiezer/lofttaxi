import {all, fork} from 'redux-saga/effects'
import {authWatcher, registerWatcher} from './authenticationSaga'
import {getCardWatcher, saveCardWatcher} from './paymentSaga'
import {getAddressListWatcher} from './addressListSaga'
import {getRouteWatcher} from './routeSaga'

export default function* rootSaga() {
    yield all([
        fork(authWatcher),
        fork(registerWatcher),
        fork(getCardWatcher),
        fork(saveCardWatcher),
        fork(getAddressListWatcher),
        fork(getRouteWatcher)
    ])
}