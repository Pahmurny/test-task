import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import common from './common'
import people from 'routes/adminPeople/reducer/peopleReducer'
import companyPeople from 'routes/companyPeople/companyPeopleReducer'

/**
 * Creates combined reducer
 * @param asyncReducers
 * @returns {Reducer<any>}
 */
const createReducer = (asyncReducers) => combineReducers({ common, people, companyPeople, ...asyncReducers, form: formReducer })

export default createReducer

