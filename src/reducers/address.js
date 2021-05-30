import {GET_ADDRESS_LIST, GET_ADDRESS_LIST_SUCCESS, GET_ADDRESS_LIST_FAILURE} from '../actions/actions'

const initialState = {
    isLoading: false,
    data: {addresses:[]},
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ADDRESS_LIST: {
            return{...state, isLoading: true, error: ''}
        }
        case GET_ADDRESS_LIST_SUCCESS: {
            return{...state, isLoading: false, data: action.payload, error: ''}
        }
        case GET_ADDRESS_LIST_FAILURE: {
            return{...state, isLoading: false, error: action.payload}
        }
        default:
            return state
    }
}