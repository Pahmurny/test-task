import { createReducer } from 'redux-create-reducer'


export const SET_MODULE_VIEW = 'Common.SET_MODULE_VIEW'
export const SET_COMMON_VALUE = 'Common.SET_COMMON_VALUE'

const initialState = {
    user: {
        id: 1,
        name: 'John Doe',
    },
}


export default createReducer(initialState, {
    [SET_MODULE_VIEW](state, { moduleView }) {
        return { ...state, moduleView }
    },
    [SET_COMMON_VALUE](state, { key, value }) {
        return { ...state, [key]: value }
    },
})

