import { createReducer } from 'redux-create-reducer'


const initialState = {}

export const UPDATE_PEOPLE_VALUE = 'PeopleModule.UPDATE_PEOPLE_VALUE'


export default createReducer(initialState, {
    [UPDATE_PEOPLE_VALUE](state, {key, value}){
        return { ...state, [key]: value }
    }
})