import { createReducer } from 'redux-create-reducer'



const initialState = {}



export const UPDATE_COMPANY_PEOPLE_VALUE = 'PeopleModule.UPDATE_COMPANY_PEOPLE_VALUE'


export default createReducer(initialState, {
    [UPDATE_COMPANY_PEOPLE_VALUE](state, {key, value}){
        return { ...state, [key]: value }
    }
})