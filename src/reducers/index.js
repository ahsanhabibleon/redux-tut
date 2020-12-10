import counterReducer from './counter'
import loggedInReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counterReducer,
    loggedInReducer
})

export default allReducers