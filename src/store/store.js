import {compose,  createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './root-saga'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
//root-reducer
const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
    ].filter(Boolean)



const composedEnhancers = compose(applyMiddleware(...middlewares))
export const store = createStore(persistedReducer,undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)