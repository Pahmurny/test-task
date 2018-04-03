import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import common from './common'
import people from 'routes/adminPeople/reducer/peopleReducer'

/**
 * Creates combined reducer
 * @param asyncReducers
 * @returns {Reducer<any>}
 */
const createReducer = (asyncReducers) => combineReducers({ common, people, ...asyncReducers, form: formReducer })

export default createReducer

