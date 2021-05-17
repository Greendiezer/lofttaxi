import { GET_CARD, getCardSuccess, getCardFailure } from '../actions/actions'
import {getCardDataFromServer} from '../api/api'

export const getCardMiddleware = (store) => (next) => async (action) => {
    if(action.type === GET_CARD) {
        const token = action.payload;
        const data = await getCardDataFromServer(token)
        if(data.id) {
            store.dispatch(getCardSuccess(data))
        } else {
            store.dispatch(getCardFailure(data.error))
        }
    } else {
        next(action)
    }
}