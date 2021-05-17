import { logIn, logInError, AUTHENTICATE } from '../actions/actions'
import {serverLogin} from '../api/api'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE) {
        const {email,password} = action.payload;
        const data = await serverLogin(email, password)
        if(data.success) {
            localStorage.setItem('token', data.token)
            store.dispatch(logIn(data.token))
        } else {
            store.dispatch(logInError(data.error))
        }
    } else {
        next(action)
    }
}