import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import createReducer from '../reducers'


const saga = createSagaMiddleware()
const asyncSagas = {}


const store = createStore(createReducer(), compose(
    applyMiddleware(...[thunk, saga]),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
))

store.asyncReducers = {}

store.runSaga = newSaga => {
    saga.run(newSaga)
}


export const injectSaga = (store, k, s ) => {
    if (!asyncSagas[k]) {
        asyncSagas[k] = s

        store.runSaga(function* forkSaga() {
            yield s()
        })
    }
}

export const injectAsyncReducer = (store, name, asyncReducer) => {
    if(!store.asyncReducers[name]) {
        store.asyncReducers[name] = asyncReducer
        store.replaceReducer(createReducer(store.asyncReducers))
    }
}


export default store