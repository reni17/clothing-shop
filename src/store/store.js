import {compose,  createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'

//root-reducer
const middlewares = [logger]
const composedEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(rootReducer,undefined, composedEnhancers)