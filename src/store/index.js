import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createReducer from '../reducers'


const store = createStore(createReducer(), compose(
    applyMiddleware(...[thunk]),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
))

store.asyncReducers = {}


export const injectAsyncReducer = (store, name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
}


export default store