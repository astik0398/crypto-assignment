import {legacy_createStore, combineReducers, applyMiddleware} from 'redux'
import { reducer as coinReducer } from './CryptoReducers/reducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    coinReducer
})

const middleware = [thunk]

export const store = legacy_createStore(rootReducer, applyMiddleware(...middleware))