import {GET_ROUTE, GET_ROUTE_SUCCESS, GET_ROUTE_FAILURE} from '../actions/actions'

const initialState = {
    isLoading: false,
    data: [],
    error: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ROUTE: {
            return{...state, isLoading: true, error: ''}
        }
        case GET_ROUTE_SUCCESS: {
            return{...state, isLoading: false, data: action.payload, error: ''}
        }
        case GET_ROUTE_FAILURE: {
            return{...state, isLoading: false, error: action.payload, data: []}
        }
        default:
            return state
    }
}