import { CHANGE_CARD, changeCard, changeCardSuccess, getCardFailure } from '../actions/actions'
import {postCardDataToServer} from '../api/api'

export const postCardDataMiddleware = (store) => (next) => async (action) => {
    if(action.type === CHANGE_CARD) {
        const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        const data = await postCardDataToServer({cardNumber, expiryDate, cardName, cvc, token})
        console.log(data)
        if(data.success) {
            store.dispatch(changeCardSuccess({cardNumber, expiryDate, cardName, cvc}))
            console.log({cardNumber, expiryDate, cardName, cvc})
        } else {
            store.dispatch(getCardFailure(data.error))
        }
    } else {
        next(action)
    }
}