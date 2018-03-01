import { combineReducers } from 'redux'
import common from './common'


const createReducer = (asyncReducers) => combineReducers({ common, ...asyncReducers })

export default createReducer

