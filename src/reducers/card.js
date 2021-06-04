import {GET_CARD, GET_CARD_SUCCESS, GET_CARD_FAILURE, CHANGE_CARD, CHANGE_CARD_SUCCESS} from '../actions/actions'

const initialState = {
    isLoading: false,
    data: {id: '', cardNumber: '', expiryDate: '', cardName: '', cvc: ''},
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CARD: {
            return{...state, isLoading: true}
        }
        case GET_CARD_SUCCESS: {
            return{...state, isLoading: false, data: action.payload, error: ''}
        }
        case GET_CARD_FAILURE: {
            return{...state, isLoading: false, error: action.payload}
        }
        case CHANGE_CARD: {
            return{...state, isLoading: true}
        }
        case CHANGE_CARD_SUCCESS: {
            return{...state, isLoading: false, data: action.payload, error: ''}
        }
        default:
            return state
    }
}