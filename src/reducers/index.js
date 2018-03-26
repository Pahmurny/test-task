import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import common from './common'

/**
 * Creates combined reducer
 * @param asyncReducers
 * @returns {Reducer<any>}
 */
const createReducer = (asyncReducers) => combineReducers({ common, ...asyncReducers, form: formReducer })

export default createReducer

