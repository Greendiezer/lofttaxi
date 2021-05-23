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