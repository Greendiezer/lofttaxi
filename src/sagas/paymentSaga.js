import {takeEvery, call, put} from '@redux-saga/core/effects'
import { GET_CARD, getCardSuccess, getCardFailure, CHANGE_CARD, changeCardSuccess } from '../actions/actions'
import {getCardDataFromServer, postCardDataToServer} from '../api/api'

export function* getCardWatcher () {
    yield takeEvery(GET_CARD, getCardSaga)
}

export function* getCardSaga(action) {
    const token = action.payload;
    const data = yield call(getCardDataFromServer, token)
    if(data.id) {
        yield put(getCardSuccess(data))
    } else {
        yield put(getCardFailure(data.error))
    }
}

export function* saveCardWatcher () {
    yield takeEvery(CHANGE_CARD, saveCardSaga)
}

export function* saveCardSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        const data = yield call(postCardDataToServer, ({cardNumber, expiryDate, cardName, cvc, token}))
        if(data.success) {
            yield put(changeCardSuccess({cardNumber, expiryDate, cardName, cvc}))
        } else {
            yield put(getCardFailure(data.error))
        }
}