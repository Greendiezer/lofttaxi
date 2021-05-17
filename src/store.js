import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {authMiddleware} from './middleware/authMiddleware'
import {getCardMiddleware} from './middleware/getCardMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import { postCardDataMiddleware } from './middleware/postCardMiddleware';


export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(authMiddleware, getCardMiddleware, postCardDataMiddleware))
)