import { combineReducers } from 'redux'
import common from './common'

/**
 * Creates combined reducer
 * @param asyncReducers
 * @returns {Reducer<any>}
 */
const createReducer = (asyncReducers) => combineReducers({ common, ...asyncReducers })

export default createReducer

