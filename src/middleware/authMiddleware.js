import { logIn, logInError, AUTHENTICATE, REGISTER, registerFailure} from '../actions/actions'
import {serverLogin, serverRegister} from '../api/api'

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
    } 
    else if(action.type === REGISTER) {
        const {email,password,name,surname} = action.payload;
        const data = await serverRegister(email,password,name,surname);
        if(data.success) {
            localStorage.setItem('token', data.token)
            store.dispatch(logIn(data.token))
        } else {
            store.dispatch(logInError(data.error))
        }
    } 
    else {
        next(action)
    }
}