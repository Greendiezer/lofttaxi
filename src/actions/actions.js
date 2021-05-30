export const LOG_IN = 'LOG_IN'
export const LOG_IN_ERROR = 'LOG_IN_ERROR'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const GET_CARD = 'GET_CARD'
export const GET_CARD_SUCCESS = 'GET_CARD_SUCCESS'
export const GET_CARD_FAILURE = 'GET_CARD_FAILURE'
export const CHANGE_CARD = 'CHANGE_CARD'
export const CHANGE_CARD_SUCCESS = 'CHANGE_CARD_SUCCESS'
export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER'
export const REGISTER_ERROR = 'REGISTER'
export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST'
export const GET_ADDRESS_LIST_SUCCESS = 'GET_ADDRESS_LIST_SUCCESS'
export const GET_ADDRESS_LIST_FAILURE = 'GET_ADDRESS_LIST_FAILURE'
export const GET_ROUTE = 'GET_ROUTE'
export const GET_ROUTE_SUCCESS = 'GET_ROUTE_SUCCESS'
export const GET_ROUTE_FAILURE = 'GET_ROUTE_FAILURE'

export const logIn = (token) => ({type: LOG_IN, payload: token})
export const logOut = () => ({type: LOG_OUT})
export const logInError = (error) => ({type: LOG_OUT, payload: error})
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: {
        email,
        password
    }
})
export const getCard = (token) => ({
    type: GET_CARD,
    payload: token
})
export const getCardSuccess = ({id, cardNumber, expiryDate, cardName, cvc}) => ({
    type: GET_CARD_SUCCESS,
    payload: {id, cardNumber, expiryDate, cardName, cvc}
})
export const getCardFailure = (error) => ({
    type: GET_CARD_FAILURE,
    payload: error
})

export const changeCard = ({cardNumber, expiryDate, cardName, cvc, token}) => ({
    type: CHANGE_CARD,
    payload: {
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token
    }
})

export const changeCardSuccess = ({cardNumber, expiryDate, cardName, cvc}) => ({
    type: CHANGE_CARD_SUCCESS,
    payload: {
        cardNumber,
        expiryDate,
        cardName,
        cvc
    }
})

export const register = (email, password, name, surname) => ({
    type: REGISTER,
    payload: {
        email,
        password, 
        name, 
        surname
    }
})


export const registerFailure = (error) => ({
    type: REGISTER_ERROR,
    payload: error
})

export const getAddressList = () => ({
    type: GET_ADDRESS_LIST
})

export const getAddressListSuccess = ({addresses}) => ({
    type: GET_ADDRESS_LIST_SUCCESS,
    payload: {addresses}
})

export const getAddressListFailure = (error) => ({
    type: GET_ADDRESS_LIST_FAILURE,
    payload: error
})

export const getRoute = ({address1, address2}) => ({
    type: GET_ROUTE,
    payload: {
        address1,
        address2
    }
})
export const getRouteSuccess = (coordinates) => ({
    type: GET_ROUTE_SUCCESS,
    payload: coordinates
})
export const getRouteFailure = (error) => ({
    type: GET_ROUTE,
    payload: error
})