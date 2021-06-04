import {LOG_IN, LOG_OUT, LOG_IN_ERROR, REGISTER, REGISTER_ERROR} from '../actions/actions'

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            return{...state, isLoggedIn: true, token: action.payload, error: ''}
        }
        case LOG_IN_ERROR: {
            return{...state, isLoggedIn: false, error: action.payload}
        }
        case LOG_OUT: {
            localStorage.removeItem('token')
            return{...state, isLoggedIn: false, token: ''}
        }
        case REGISTER_ERROR: {
            return{...state, isLoggedIn: false, token: '', error: action.payload}
        }
        default:
            return state
    }
}