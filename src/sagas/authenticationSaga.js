import {takeEvery, call, put} from '@redux-saga/core/effects'
import { logIn, logInError, AUTHENTICATE, REGISTER, registerFailure} from '../actions/actions'
import {serverLogin, serverRegister} from '../api/api'

export function* authWatcher () {
    yield takeEvery(AUTHENTICATE, authenticationSaga)
}

export function* authenticationSaga(action) {
    const {email,password} = action.payload;
    const data = yield call(serverLogin, email, password)
    if(data.success) {
        localStorage.setItem('token', data.token)
        yield put(logIn(data.token))
    } else {
        yield put(logInError(data.error))
    }
}

export function* registerWatcher () {
    yield takeEvery(REGISTER, registerSaga)
}

export function* registerSaga(action) {
    const {email,password,name,surname} = action.payload;
    const data = yield call(serverRegister, email,password,name,surname);
    if(data.success) {
        localStorage.setItem('token', data.token)
        yield put(logIn(data.token))
    } else {
        yield put(logInError(data.error))
    }
}