import { createReducer } from 'redux-create-reducer'


export const UPDATE_REVIEW_VALUE = 'Reviews.UPDATE_REVIEW_VALUE'

export default createReducer({}, {
  [UPDATE_REVIEW_VALUE](state, { key, value }) {
    return { ...state, [key]: value }
  },
})