import { createReducer } from 'redux-create-reducer'


export const SET_MODULE_VIEW = 'Common.SET_MODULE_VIEW'

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
})

